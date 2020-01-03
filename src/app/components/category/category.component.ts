import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { AuthService } from "src/app/services/auth/auth.service";
import { LoaderService } from "src/app/services/loader/loader.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  @Output() categoryPosts = new EventEmitter<any>();
  categories: any;
  posts: any;
  constructor(private Auth: AuthService, private Loader: LoaderService) {}
  ngOnInit() {
    this.Loader.display(true);
    this.Auth.getCategories().subscribe((data: any) => {
      this.categories = data.data;
      console.log(this.categories);
      this.Loader.display(false);
    });
  }

  getPosts(id) {
    this.Auth.getBlogByCategory(id).subscribe((data: any) => {
      this.posts = data;
      this.categoryPosts.emit(this.posts);
    });
  }
}
