import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: [ './auth.component.css' ]
})
export class AuthComponent implements OnInit {
	constructor(private Auth: AuthService, private router: Router) {}
	createLoading: Boolean = false;
	loading: Boolean = false;
	loginForm = new FormGroup({
		username: new FormControl(''),
		password: new FormControl('')
	});
	signupForm = new FormGroup({
		name: new FormControl(''),
		email: new FormControl(''),
		phone: new FormControl(''),
		username: new FormControl(''),
		password: new FormControl('')
	});
	ngOnInit() {
		const signUpButton = document.getElementById('signUp');
		const signInButton = document.getElementById('signIn');
		const container = document.getElementById('container');

		signUpButton.addEventListener('click', () => {
			container.classList.add('right-panel-active');
		});

		signInButton.addEventListener('click', () => {
			container.classList.remove('right-panel-active');
		});
	}

	// log userin
	loginUser() {
		this.loading = true;
		this.Auth.userSignin(this.loginForm.value).subscribe(
			(data: any) => {
				this.loading = false;
				Swal.fire({
					title: 'Success!',
					text: 'Login Successful',
					icon: 'success',
					confirmButtonText: 'Ok'
				});
				localStorage.setItem('access_token', data.token);
				localStorage.setItem('user', JSON.stringify(data.user));
				this.router.navigate([ '/list-draft' ]);
			},
			(err: HttpErrorResponse) => {
				this.loading = false;
				if (err.error.msg) {
					Swal.fire({
						title: 'Error!',
						text: err.error.msg,
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

	//register new user
	registerUser() {
		this.createLoading = true;
		this.Auth.registerNewUser(this.signupForm.value).subscribe(
			(data: any) => {
				this.createLoading = false;
				Swal.fire({
					title: 'Success',
					text: data.msg,
					icon: 'success',
					confirmButtonText: 'Ok'
				});
			},
			(err: HttpErrorResponse) => {
				this.createLoading = false;
				if (err.error.msg) {
					Swal.fire({
						title: 'Error!',
						text: err.error.msg,
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
}
