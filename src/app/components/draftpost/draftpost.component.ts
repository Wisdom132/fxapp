import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormControl } from '@angular/forms';
import { DraftService } from '../../services/draft/draft.service';

@Component({
	selector: 'app-draftpost',
	templateUrl: './draftpost.component.html',
	styleUrls: [ './draftpost.component.css' ]
})
export class DraftpostComponent implements OnInit {
	constructor(private Draft: DraftService) {}

	loading: boolean = false;
	drafter: string;
	draftForm = new FormGroup({
		title: new FormControl(''),
		tags: new FormControl(''),
		category: new FormControl(''),
		content: new FormControl('')
	});
	public Editor = ClassicEditor;
	public editorData;

	fileToUpload: File = null;
	handleFileInput(files: FileList) {
		this.fileToUpload = files.item(0);
		console.log(this.fileToUpload);
	}

	addDraft() {
		this.loading = true;
		this.Draft.draftPost(this.draftForm.value, this.fileToUpload, this.drafter);
		console.log();
	}
	// getDrafter() {
	// 	lo
	// }
	ngOnInit() {}
}
