import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass', '../index/index.component.sass', '../login/login.component.sass'],
  providers: [RegistrationService]
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(
    private registrationService: RegistrationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      return;
    }
    this.registrationService.registerUser(this.registrationForm.value)
      .pipe(first())
      .subscribe(
        response => {
          this.router.navigate(['/login']);
        },
        error => {
          alert(error.message);
        }
      );
  }
}
