import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./app-footer.component.html",
  styleUrls: ["./app-footer.component.css"]
})
export class AppFooterComponent implements OnInit {
  currentYear: any;
  constructor() {}

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
}
