import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class BlogService {
	readonly rootURL: string = 'https://manny-fxapp.herokuapp.com';
	getCategories() {
		return this.http.get(`${this.rootURL}/api/category`);
	}

	getBlogByCategory(id) {
		return this.http.get(`${this.rootURL}/api/blog/category/${id}`);
	}

	getBlogPostDetails(id) {
		return this.http.get(`${this.rootURL}/api/blog/${id}`);
	}

	getRecentBlogPost() {
		return this.http.get(`${this.rootURL}/api/blog/get-category-blog`);
	}

	constructor(private http: HttpClient) {}
}
