import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataBaseService } from 'src/app/Services/database.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  loginForm!: FormGroup;
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private DataBaseService: DataBaseService,
    private navegation: Router,
    private cookieSvc: CookieService
  ) {
    this.loginForm = this.fb.group({
      userName: ['Blaze', [Validators.required, Validators.minLength(3)]],
      password: ['mypassword', [Validators.required, Validators.minLength(7)]],
    });

    this.registerForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(3)]],
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(7)]],
    });
  }

  ngOnInit(): void {
    const signUpButton: HTMLElement = document.getElementById('signUp')!;
    const signInButton: HTMLElement = document.getElementById('signIn')!;
    const container: HTMLElement = document.getElementById('container')!;

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });
  }

  login() {
    this.DataBaseService.login(this.loginForm.value).subscribe((res) => {
      if (res.token) {
        this.cookieSvc.set('token', res.token);

        this.DataBaseService.verifyToken().subscribe((res) => {
          this.cookieSvc.set('token', res.newToken, 15, '/');
        });

        this.navegation.navigate(['/notes']);
      }
    });
  }

  register() {
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }
}
