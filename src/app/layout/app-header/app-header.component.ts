import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './app-header.component.html',
	styleUrls: [ './app-header.component.css' ]
})
export class AppHeaderComponent implements OnInit {
	categories: any;
	constructor(private Category: AuthService, private router: Router) {}

	ngOnInit() {
		this.Category.getCategories().subscribe((data: any) => {
			this.categories = data.data;
			console.log(this.categories);
		});
	}

	logout() {
		localStorage.removeItem('access_token');
		this.router.navigate([ '' ]);
	}
}
