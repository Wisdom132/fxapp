import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth/auth.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  categories: any;
  constructor(private Auth: AuthService) {}
  ngOnInit() {
    this.Auth.getCategories().subscribe((data: any) => {
      this.categories = data.data;
      console.log(this.categories);
    });
  }
}
