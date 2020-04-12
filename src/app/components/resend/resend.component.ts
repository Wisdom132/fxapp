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
				this.loading = false;
				Swal.fire({
					title: 'Success!',
					text: 'Confirmation Email Sent',
					icon: 'success'
				});
			},
			(err: HttpErrorResponse) => {
				this.loading = false;
				if (err.error.msg) {
					Swal.fire({
						title: 'Error!',
						text: err.error.msg,
						icon: 'error'
					});
				} else {
					Swal.fire({
						title: 'Error!',
						text: 'Something Went Wrong',
						icon: 'error'
					});
				}
			}
		);
	}
	ngOnInit() {}
}
