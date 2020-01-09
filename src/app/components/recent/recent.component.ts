import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth/auth.service";

@Component({
  selector: "app-recent",
  templateUrl: "./recent.component.html",
  styleUrls: ["./recent.component.css"]
})
export class RecentComponent implements OnInit {
  recent: any;
  recentHeader: string = "Most Recent Posts";
  constructor(private Auth: AuthService) {}

  ngOnInit() {
    this.Auth.getRecentBlogPost().subscribe((data: any) => {
      this.recent = data.data.splice(0, 4);
      console.log(this.recent);
    });
  }
  listener(id) {
    this.recent = id.data;

    this.recentHeader = this.recent[0].category.title;
    // this.recent = JSON.stringify(id.data);
  }
}
