import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth/auth.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { LoaderService } from "src/app/services/loader/loader.service";
@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"]
})
export class BlogComponent implements OnInit {
  blogPosts: any;
  postDetails: any;
  viewPost: boolean = false;
  constructor(
    private Auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private Loader: LoaderService
  ) {}

  ngOnInit() {
    let btn = document.querySelector("#sidebarCollapse");
    let sidebar = document.querySelector("#sidebar");
    btn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
    this.Loader.display(true);
    let id = this.route.snapshot.paramMap.get("id");
    this.Auth.getBlogByCategory(id).subscribe((data: any) => {
      this.blogPosts = data.data;
      this.Loader.display(false);
      this.getBlogPostDetails(this.blogPosts[0]);

      console.log(this.blogPosts);
    });
  }
  getBlogPostDetails(blog) {
    this.viewPost = true;
    this.postDetails = blog;
    // this.Auth.getBlogPostDetails(id).subscribe((data: any) => {
    //   this.postDetails = data.response;
    //   console.log(this.postDetails);
    // });
  }
}
