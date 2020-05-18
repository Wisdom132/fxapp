import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { ResendComponent } from './components/resend/resend.component';
import { DraftpostComponent } from './components/draftpost/draftpost.component';
import { ListDraftComponent } from './components/list-draft/list-draft.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PreviewComponent } from './components/preview/preview.component';

//bring in the layouts
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
	{
		path: 'auth',
		component: BlankLayoutComponent,
		children: [
			{ path: '', component: AuthComponent, pathMatch: 'full' },
			{ path: 'resend-confirmation', component: ResendComponent },
			{ path: 'forgot-password', component: ForgotPasswordComponent }
		] // route for login
	},
	{
		path: '',
		component: SiteLayoutComponent,
		children: [
			{ path: '', component: HomeComponent },
			{ path: 'list-draft', canActivate: [ AuthGuard ], component: ListDraftComponent },

			{ path: 'draft-post', canActivate: [ AuthGuard ], component: DraftpostComponent },

			{ path: 'draft/:id', canActivate: [ AuthGuard ], component: PreviewComponent },
			{ path: 'blog/:id', component: BlogComponent } //canActivate: [AuthGuard] //add authentication
		]
	}
	// {
	//   path: "",
	//   component: SiteLayoutComponent,
	//   children: [
	//     { path: "blog/:id", component: BlogComponent, canActivate: [AuthGuard] } // routes for blogpost
	//   ]
	// }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
