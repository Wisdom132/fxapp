import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DraftService {
	// readonly rootURL: string = 'https://manny-fxapp.herokuapp.com';
	readonly rootURL: string = 'http://localhost:5000';

	getDraftersDraft(id) {
		return this.http.get(`${this.rootURL}/api/draft/drafter/${id}`);
	}
	draftPost(data, file: File, drafter) {
		const formData: FormData = new FormData();
		formData.append('featured_image', file);
		formData.append('title', data.title);
		formData.append('tags', data.tags);
		formData.append('category', data.category);
		formData.append('content', data.content);
		formData.append('drafter', drafter);
		return this.http.post(`${this.rootURL}/api/draft/draft-post`, formData);
	}

	removeDraft(id) {
		return this.http.delete(`${this.rootURL}/api/draft/${id}`);
	}
	editDraft(id, data) {
		return this.http.put(`${this.rootURL}/api/draft/update/${id}`, data);
	}
	constructor(private http: HttpClient) {}
}
