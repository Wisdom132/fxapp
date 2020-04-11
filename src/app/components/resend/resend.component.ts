import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-resend',
	templateUrl: './resend.component.html',
	styleUrls: [ './resend.component.css' ]
})
export class ResendComponent implements OnInit {
	loading: boolean = false;
	constructor(private Auth: AuthService) {}
	resendEmail(e) {
		this.loading = true;
		const target = e.target;
		let email = target.querySelector('#email').value;
		this.Auth.resendConfirmation(email).subscribe(
			(data: any) => {
				console.log(data);
				Swal.fire({
					title: 'Success!',
					text: 'Mail Resent',
					icon: 'success',
					confirmButtonText: 'Ok'
				});
			},
			(err: HttpErrorResponse) => {
				this.loading = false;
				console.log(err.error);
				// let code = JSON.parse(err.error);
				if (err.error.code.msg) {
					Swal.fire({
						title: 'Error!',
						text: err.error.code.msg,
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
	ngOnInit() {}
}
