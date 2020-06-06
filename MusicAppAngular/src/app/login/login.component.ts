import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass', '../index/index.component.sass'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loginUser(this.loginForm.value);
  }

  loginUser(data) {
    this.loginService.loginUser(this.loginForm.value)
      .pipe(first())
      .subscribe(
        response => {
          // @ts-ignore
          this.cookieService.set('access', response.access);
          // @ts-ignore
          this.cookieService.set('refresh', response.refresh);
          this.router.navigate(['/home']);
        },
        error => {
          alert(error.message);
        }
      );
  }

}
