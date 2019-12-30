import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./components/auth/auth.component";
import { FormsModule } from "@angular/forms"; // form modules
import { HttpClientModule } from "@angular/common/http";
import { AppHeaderComponent } from "./layout/app-header/app-header.component";
import { AppFooterComponent } from "./layout/app-footer/app-footer.component";
import { SiteLayoutComponent } from "./layout/site-layout/site-layout.component";
import { BlankLayoutComponent } from "./layout/blank-layout/blank-layout.component";
import { HomeComponent } from "./components/home/home.component";
import { CategoryComponent } from "./components/category/category.component"; //defining http client
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { AuthGuard } from "./guard/auth.guard";
import { AuthService } from "./services/auth/auth.service";
import { BlogComponent } from './components/blog/blog.component';
import { RecentComponent } from './components/recent/recent.component';
import { LoaderComponent } from './components/loader/loader.component';

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
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
