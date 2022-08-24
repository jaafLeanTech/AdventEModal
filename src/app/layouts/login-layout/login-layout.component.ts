import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/authentication/login/auth.service';
import { TableComponent } from '../../modules/containers/components/table/table.component';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private fb: FormBuilder, private AuthSvc: AuthService, private router: Router) {
    this.formLogin = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
    return;
  }

  logIn(): void {
    const formValue = this.formLogin.value;
    console.log('formValue', formValue);
    this.AuthSvc.login(formValue).subscribe( res => {
      if (res){
        this.router.navigate(["/containers"]);
      }
    })
  }

  get getUsername(){
    return this.formLogin.get("username")
  }

  get getLastName(){
    return this.formLogin.get("password")
  }

}
