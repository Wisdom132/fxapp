import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoaderService } from 'src/app/services/loader/loader.service';
@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: [ './blog.component.css' ]
})
export class BlogComponent implements OnInit {
	blogPosts: any;
	postDetails: any;
	viewPost: boolean = false;
	loading: boolean = false;
	constructor(
		private Auth: AuthService,
		private route: ActivatedRoute,
		private router: Router,
		private Loader: LoaderService
	) {}

	ngOnInit() {
		let btn = document.querySelector('#sidebarCollapse');
		let sidebar = document.querySelector('#sidebar');
		btn.addEventListener('click', () => {
			sidebar.classList.toggle('active');
		});
		let id = this.route.snapshot.paramMap.get('id');
		this.loading = true;
		this.Auth.getBlogByCategory(id).subscribe((data: any) => {
			this.loading = false;
			this.blogPosts = data.data.reverse();
			this.getBlogPostDetails(this.blogPosts[0]);
		});
	}

	getBlogPostDetails(blog) {
		this.viewPost = true;
		this.postDetails = blog;
	}
}
