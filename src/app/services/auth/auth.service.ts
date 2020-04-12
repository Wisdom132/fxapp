import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
	success: boolean;
	message: string;
}

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	readonly rootURL: string = 'https://manny-fxapp.herokuapp.com';
	// readonly rootURL: string = 'http://localhost:5000';

	constructor(private http: HttpClient) { }

	userSignin(data) {
		return this.http.post(`${this.rootURL}/api/users/login`, data);
	}

	registerNewUser(data) {
		return this.http.post(`${this.rootURL}/api/users/register`, data);
	}

	resendConfirmation(email) {
		console.log(email);
		return this.http.post(`${this.rootURL}/api/users/resend`, { email: email });
	}
}
