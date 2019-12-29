import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

interface myData {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  readonly rootURL: string = "https://manny-fxapp.herokuapp.com";

  constructor(private http: HttpClient) {}

  userSignin(username, password) {
    return this.http.post<myData>(`${this.rootURL}/api/users/login`, {
      username,
      password
    });
  }

  registerNewUser(email, username, password) {
    return this.http.post(
      `${this.rootURL}/api/users/register`,
      {
        email,
        username,
        password
      },
      { responseType: "text" as "json" }
    );
  }

  getCategories() {
    return this.http.get(`${this.rootURL}/api/category`, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem("access_token")
      })
    });
  }

  getBlogByCategory(id) {
    return this.http.get(`${this.rootURL}/api/blog/category/${id}`, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem("access_token")
      })
    });
  }

  getBlogPostDetails(id) {
    return this.http.get(`${this.rootURL}/api/blog/${id}`, {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem("access_token")
      })
    });
  }

  getRecentBlogPost() {
    return this.http.get(`${this.rootURL}/api/blog`);
  }
}