import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormControl } from '@angular/forms';
import { DraftService } from '../../services/draft/draft.service';
import { BlogService } from '../../services/blog/blog.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { SharedService } from '../../shared/shared.service';

@Component({
	selector: 'app-draftpost',
	templateUrl: './draftpost.component.html',
	styleUrls: [ './draftpost.component.css' ]
})
export class DraftpostComponent implements OnInit {
	constructor(private Draft: DraftService, private Blog: BlogService, private sharedService: SharedService) {}
	toBeEdited;
	editMode: Boolean = false;
	loading: boolean = false;
	user: any;
	category: any;
	drafter: string;
	fileToUpload: File = null;

	draftForm = new FormGroup({
		title: new FormControl(''),
		tags: new FormControl(''),
		category: new FormControl(''),
		content: new FormControl(''),
		id: new FormControl('')
	});
	public Editor = ClassicEditor;
	public editorData;

	handleFileInput(files: FileList) {
		this.fileToUpload = files.item(0);
		console.log(this.fileToUpload);
	}

	getCategories() {
		this.Blog.getCategories().subscribe((data: any) => {
			this.category = data.data;
			console.log(this.category);
		});
	}

	addDraft() {
		this.loading = true;
		this.Draft.draftPost(this.draftForm.value, this.fileToUpload, this.user._id).subscribe(
			(data: any) => {
				this.loading = false;
				this.draftForm.reset();
				Swal.fire({
					title: 'Success!',
					text: 'Post Drafted',
					icon: 'success'
				});
			},
			(err: HttpErrorResponse) => {
				this.loading = false;
				console.log();
				if (err.error.error.name == 'ValidationError') {
					Swal.fire({
						title: 'Error!',
						text: 'Please Fill The Form Correctly',
						icon: 'error',
						confirmButtonText: 'Ok'
					});
				} else {
					Swal.fire({
						title: 'Error!',
						text: 'Something Went Wrong',
						icon: 'error',
						confirmButtonText: 'Ok'
					});
				}
			}
		);
	}
	getDataFromListDraftToEdit() {
		this.sharedService.sharedMessage.subscribe((message) => (this.toBeEdited = message));
		if (this.toBeEdited !== '') {
			let editable = JSON.parse(this.toBeEdited);
			this.editMode = true;
			this.draftForm.patchValue({
				title: editable.title,
				tags: editable.tags[0],
				category: editable.category._id,
				content: editable.content,
				id: editable._id
			});
		}
	}

	editDraft() {
		this.loading = true;
		this.Draft.editDraft(this.draftForm.value.id, this.draftForm.value).subscribe(
			(data) => {
				this.loading = false;
				this.draftForm.reset();
				Swal.fire({
					title: 'Success!',
					text: 'Post Drafted',
					icon: 'success'
				});
			},
			(err: HttpErrorResponse) => {
				this.loading = false;
				console.log(err.error);

				Swal.fire({
					title: 'Error!',
					text: 'Something Went Wrong',
					icon: 'error',
					confirmButtonText: 'Ok'
				});
			}
		);
	}

	getDrafter() {
		let rawData = localStorage.getItem('user');
		this.user = JSON.parse(rawData);
	}

	ngOnInit() {
		this.getDataFromListDraftToEdit();
		this.getCategories();
		this.getDrafter();
	}
}
