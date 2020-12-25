import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../authentication.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alreadyRegistered: boolean = false;

  signupForm: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.minLength(4)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(5)])
  });
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router
  ) {
  }

  getFieldByName (fieldName: string) {
    return this.signupForm.get(fieldName);
  }

  isInvalid(fieldName: string) {
    const field = this.getFieldByName(fieldName);
    return field.invalid && (field.touched || field.dirty);
  }

  ngOnInit(): void {
  }

  onSubmit(signupForm){
    if(this.signupForm.invalid){
      this.signupForm.markAllAsTouched();
      return;
    }
    this.authenticationService.register(signupForm)
    .subscribe((resp: HttpResponse<any>)=>{
      if(resp.headers.get('x-auth-token')){
        console.log(resp);
        const token = resp.headers.get('x-auth-token');
        localStorage.setItem('token', token);
        this.router.navigate([`diary`]);
      }
    }, (err)=>{
        this.alreadyRegistered = true;
    })
  }
}
