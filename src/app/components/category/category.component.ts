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
  images = ["fx-1.png", "fx-2.png", "fx-3.png", "fx-4.jpg"];
  basePath = "../../../assets/img/";
  constructor(private Auth: AuthService, private Loader: LoaderService) {}

  ngOnInit() {
    this.Loader.display(true);
    this.Auth.getCategories().subscribe((data: any) => {
      this.categories = data.data;
      console.log(this.categories);
      this.Loader.display(false);
    });
  }

  // getRandom() {
  //   let categoryImg: any = document.getElementById("categoryImg");
  //   for (let i; i < this.images.length; i++) {
  //     let rand = this.images[Math.floor(Math.random() * 2)];
  //     console.log({ src: categoryImg });
  //     categoryImg = this.basePath + rand;
  //   }
  // }

  getPosts(id) {
    this.Auth.getBlogByCategory(id).subscribe((data: any) => {
      this.posts = data;
      this.categoryPosts.emit(this.posts);
    });
  }
}
