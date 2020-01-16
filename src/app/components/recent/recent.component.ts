import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth/auth.service";
import { LoaderService } from "src/app/services/loader/loader.service";

@Component({
  selector: "app-recent",
  templateUrl: "./recent.component.html",
  styleUrls: ["./recent.component.css"]
})
export class RecentComponent implements OnInit {
  recent: any;
  recentHeader: string = "Introduction to Forex trading";
  constructor(private Auth: AuthService, private Loader: LoaderService) {}

  ngOnInit() {
    this.Loader.display(true);
    this.Auth.getRecentBlogPost().subscribe((data: any) => {
      this.recent = data.data.splice(0, 4);
      console.log(this.recent);
      this.Loader.display(false);
    });
  }
  listener(id) {
    this.recent = id.data;
    this.recentHeader = this.recent[0].category.title;
  }
}
