import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataBaseService } from 'src/app/Services/database.service';
import { CookieService } from 'ngx-cookie-service';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  loginForm!: FormGroup;
  registerForm!: FormGroup;

  ERRORS: any = {
    invalidUser: false,
    userTaken: false,
    userNameTaken: false,
  };

  shwpass: boolean = false;

  constructor(
    private fb: FormBuilder,
    private DataBaseService: DataBaseService,
    private navegation: Router,
    private cookieSvc: CookieService
  ) {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.registerForm = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(8)]],
      userName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
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
    this.DataBaseService.login(this.loginForm.value)
      .pipe(
        map((res) => {
          // Navegar a la pagina de notas y guardar el token en una Cookie
          this.cookieSvc.set('token', res.token);
          this.navegation.navigate(['/notes/home']);
        }),
        catchError((err) => {
          if (err.error.error == 'Invalid user or password') {
            this.ShowErrorAlert('invalidUser');
          }
          return of(false);
        })
      )
      .subscribe();
  }

  register() {
    this.DataBaseService.NewUser(this.registerForm.value)
      .pipe(
        map((res) => {
          // Navegar a la pagina de notas y guardar el token en una Cookie
          this.cookieSvc.set('token', res.token);
          this.navegation.navigate(['/notes/home']);
        }),
        catchError((err) => {
          const errorMessage = err.error.error;

          const errors = {
            user: 'Error, expected `user` to be unique',
            userNameTaken: 'Error, expected `userName` to be unique',
          };

          if (errorMessage.includes(errors.userNameTaken)) {
            this.ShowErrorAlert('userNameTaken');
          }
          if (errorMessage.includes(errors.user)) {
            this.ShowErrorAlert('userTaken');
          }
          return of(false);
        })
      )
      .subscribe();
  }

  ShowErrorAlert(variableToUpdate: string) {
    this.ERRORS[variableToUpdate] = true;

    setTimeout(() => {
      this.ERRORS[variableToUpdate] = false;
    }, 4000);
  }

  ShowPassword(input: HTMLInputElement) {
    this.shwpass = !this.shwpass; 

    input.type = this.shwpass ? 'text' : 'password';
  }
}
