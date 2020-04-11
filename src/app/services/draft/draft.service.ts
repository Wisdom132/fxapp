import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DraftService {
	readonly rootURL: string = 'https://manny-fxapp.herokuapp.com';

	getDraftersDraft(id) {
		return this.http.get(`${this.rootURL}/api/draft/drafter/${id}`);
	}
	draftPost(data: Object, file: File, drafter: String) {
		console.log(data);
		const formData: FormData = new FormData();
		formData.append('featured_image', file);
		formData.append('title', data.title);
		formData.append('tags', data.tags);
		formData.append('category', data.category);
		formData.append('content', data.content);
		formData.append('drafter', drafter);
	}
	constructor(private http: HttpClient) {}
}
