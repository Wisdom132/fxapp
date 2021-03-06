import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // form modules
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from '../../src/app/interceptor/httpconfig.interceptor';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component'; //defining http client
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { BlogComponent } from './components/blog/blog.component';
import { RecentComponent } from './components/recent/recent.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DraftpostComponent } from './components/draftpost/draftpost.component';
import { ResendComponent } from './components/resend/resend.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ListDraftComponent } from './components/list-draft/list-draft.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { PreviewComponent } from './components/preview/preview.component';

@NgModule({
	declarations: [
		AppComponent,
		AuthComponent,
		AppHeaderComponent,
		AppFooterComponent,
		SiteLayoutComponent,
		BlankLayoutComponent,
		HomeComponent,
		CategoryComponent,
		BlogComponent,
		RecentComponent,
		LoaderComponent,
		DraftpostComponent,
		ResendComponent,
		ForgotPasswordComponent,
		ListDraftComponent,
		PreviewComponent
	],
	imports: [
		ReactiveFormsModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		CKEditorModule,
		SweetAlert2Module.forRoot()
	],
	providers: [
		AuthGuard,
		AuthService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpConfigInterceptor,
			multi: true
		}
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
