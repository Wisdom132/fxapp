import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { HttpErrorResponse } from "@angular/common/http";
import Swal from "sweetalert2";
import { Router } from "@angular/router";
import { error } from "util";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  constructor(private Auth: AuthService, private router: Router) {}

  ngOnInit() {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  }

  // log userin
  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    let username = target.querySelector("#username").value;
    let password = target.querySelector("#password").value;
    this.Auth.userSignin(username, password).subscribe(
      (data: any) => {
        Swal.fire({
          title: "Success!",
          text: "Login Successful",
          icon: "success",
          confirmButtonText: "Ok"
        });
        localStorage.setItem("access_token", data.token);
        this.router.navigate(["/home"]);
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        Swal.fire({
          title: "Error!",
          text: err.error.msg,
          icon: "error",
          confirmButtonText: "Ok"
        });
        console.log(err.error);
      }
    );
  }

  //register new user
  registerUser(event) {
    event.preventDefault();
    const target = event.target;
    let createEmail = target.querySelector("#createemail").value;
    let username = target.querySelector("#createusername").value;
    let createpassword = target.querySelector("#createpassword").value;
    this.Auth.registerNewUser(createEmail, username, createpassword).subscribe(
      (data: any) => {
        Swal.fire({
          title: "Success",
          text: data,
          icon: "success",
          confirmButtonText: "Ok"
        });
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        let code = JSON.parse(err.error);
        console.log(code.msg);
        if (code.msg) {
          Swal.fire({
            title: "Error!",
            text: code.msg,
            icon: "error",
            confirmButtonText: "Ok"
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Something Went Wrong",
            icon: "error",
            confirmButtonText: "Ok"
          });
        }
      }
    );
  }
}
