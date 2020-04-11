import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
	selector: 'app-recent',
	templateUrl: './recent.component.html',
	styleUrls: [ './recent.component.css' ]
})
export class RecentComponent implements OnInit {
	recent: any;
	recentHeader: string = 'Introduction to Forex trading';
	loading: boolean = false;
	constructor(private Blog: BlogService, private Loader: LoaderService) {}

	ngOnInit() {
		this.loading = true;
		this.Blog.getRecentBlogPost().subscribe((data: any) => {
			this.recent = data.data.splice(0, 4);
			this.loading = false;
			console.log(this.recent);
		});
	}
	listener(id) {
		this.recent = id.data;
		this.recentHeader = this.recent[0].category.title;
	}
}
