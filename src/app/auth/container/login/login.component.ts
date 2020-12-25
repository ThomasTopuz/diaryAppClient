import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authFailed: boolean;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    this.authenticationService.getCurrentUser()
    .subscribe((data)=>{
      this.router.navigate(['diary']);
    }, ()=>{
      return;
    })
  }

  getField(fieldName: string) {
    return this.loginForm.get(fieldName);
  }
  isFieldInvalid(fieldName: string) {
    const field = this.getField(fieldName);
    return field.invalid && field.touched;
  }

  login() {
    if (this.loginForm.invalid) {
      return this.loginForm.markAllAsTouched();
    }
    this.authenticationService.login(this.loginForm.value).subscribe(
      (resp: HttpResponse<any>) => {
        localStorage.setItem('token', resp.headers.get('x-auth-token'));
        this.router.navigate(["diary"]);
      },
      (err) => {
        this.authFailed = true;
      }
    );
  }
}
