import { Component, OnInit } from '@angular/core';
import { DraftService } from '../../services/draft/draft.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-list-draft',
	templateUrl: './list-draft.component.html',
	styleUrls: [ './list-draft.component.css' ]
})
export class ListDraftComponent implements OnInit {
	user: any;
	drafts: any;
	message: String;
	loading: Boolean = false;
	constructor(private Draft: DraftService, private sharedService: SharedService, private router: Router) {}

	getUsersDraft() {
		this.loading = true;
		this.Draft.getDraftersDraft(this.user._id).subscribe((data: any) => {
			this.loading = false;
			this.drafts = data.response.reverse();
			console.log(this.drafts);
		});
	}
	removeDraft(id) {
		this.loading = true;
		this.Draft.removeDraft(id).subscribe((data) => {
			this.loading = false;
			this.getUsersDraft();
			Swal.fire({
				title: 'Success',
				text: 'Draft Deleted',
				icon: 'info'
			});
		});
	}
	getDrafter() {
		let rawData = localStorage.getItem('user');
		this.user = JSON.parse(rawData);
	}
	logSomething(e, d) {
		this.loading = true;
		this.Draft.editDraft(d._id, { isCompleted: e.target.value }).subscribe((data: any) => {
			this.loading = false;
			this.getUsersDraft();
			Swal.fire({
				title: 'Success',
				text: 'Draft Updated',
				icon: 'info'
			});
		});
		console.log(e.target.value);
		console.log(d);
	}
	newMessage(data) {
		this.sharedService.nextMessage(JSON.stringify(data));
		this.router.navigate([ '/draft-post' ]);
	}

	ngOnInit() {
		this.sharedService.sharedMessage.subscribe((message) => (this.message = message));
		this.getDrafter();
		this.getUsersDraft();
	}
}
