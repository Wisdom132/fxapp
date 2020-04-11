import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
	selector: 'app-header',
	templateUrl: './app-header.component.html',
	styleUrls: [ './app-header.component.css' ]
})
export class AppHeaderComponent implements OnInit {
	categories: any;
	constructor(private Blog: BlogService, private router: Router) {}

	ngOnInit() {
		this.Blog.getCategories().subscribe((data: any) => {
			this.categories = data.data;
			console.log(this.categories);
		});
	}

	logout() {
		localStorage.removeItem('access_token');
		this.router.navigate([ '' ]);
	}
}
