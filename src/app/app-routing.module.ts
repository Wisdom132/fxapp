import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./components/auth/auth.component";
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";

//bring in the layouts
import { SiteLayoutComponent } from "./layout/site-layout/site-layout.component";
import { BlankLayoutComponent } from "./layout/blank-layout/blank-layout.component";
import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
  // {
  //   path: "",
  //   component: BlankLayoutComponent,
  //   children: [{ path: "", component: AuthComponent, pathMatch: "full" }] // route for login
  // },
  {
    path: "",
    component: SiteLayoutComponent,
    children: [
      { path: "", component: HomeComponent } //canActivate: [AuthGuard]
    ]
  },
  {
    path: "",
    component: SiteLayoutComponent,
    children: [
      { path: "blog/:id", component: BlogComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
