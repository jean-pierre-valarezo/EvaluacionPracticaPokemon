import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


const USER = {
  email: 'usuario@ups.edu.ec',
  password: '123456'
};

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {
  form: FormGroup;
  error = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    const { email, password } = this.form.value;

    if (email === USER.email && password === USER.password) {
      this.error = false;
      this.router.navigate(['/home']);
    } else {
      this.error = true;
    }
  }

 }
