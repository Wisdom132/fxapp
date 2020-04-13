import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DraftService } from '../../services/draft/draft.service';

@Component({
	selector: 'app-preview',
	templateUrl: './preview.component.html',
	styleUrls: [ './preview.component.css' ]
})
export class PreviewComponent implements OnInit {
	constructor(private router: Router, private route: ActivatedRoute, private Draft: DraftService) {}
	preview = null;
	loading: Boolean = false;
	getDraftById(id) {
		this.loading = true;
		this.Draft.getDraftById(id).subscribe((data: any) => {
			this.loading = false;
			this.preview = data.response;
			console.log(this.preview);
		});
	}
	ngOnInit() {
		let id = this.route.snapshot.paramMap.get('id');
		this.getDraftById(id);
	}
}
