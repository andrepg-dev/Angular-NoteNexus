import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NoteInterface } from './Interfaces/interface';
import { DataBaseService } from './Services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form!: FormGroup;
  notes: NoteInterface[] = [];
  token = window.localStorage.getItem('token');

  // Note
  noteForm!: FormGroup;

  // form_register
  form_register!: FormGroup;

  constructor(
    private DataBaseService: DataBaseService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      userName: 'Pastoor Teemo',
      password: 'writting an strong password',
    });

    this.form_register = this.fb.group({
      userName: 'Hello',
      user: 'Carlos12',
      password: '123123123',
    });

    this.noteForm = this.fb.group({
      content: '',
      important: false,
    });

    if (this.token) {
      this.getNotes();
    }
  }

  login() {
    this.DataBaseService.login(this.form.value).subscribe((res) => {
      this.token = res.token;
      this.setToken(this.token);
      this.getNotes();
    });
  }

  getNotes() {
    this.DataBaseService.Get().subscribe((res) => {
      this.notes = res;
    });
  }

  setToken(token: string) {
    return window.localStorage.setItem('token', token);
  }

  getToken() {
    this.token = window.localStorage.getItem('token');
  }

  Logout() {
    this.token = null;
    this.notes = [];
    return this.DataBaseService.DeleteToken();
  }

  setNewNote() {
    this.DataBaseService.Post(this.noteForm.value).subscribe((res) => {
      console.log(res);
      this.noteForm.reset();
      this.getNotes();
    });
  }

  NewUser() {
    this.DataBaseService.NewUser(this.form_register.value).subscribe(res=>{
      console.log(res);
    })
  }
}
