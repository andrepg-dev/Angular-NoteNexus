import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/environment';
import {
  Login,
  NewUser,
  NoteInterface,
  OwnNoteInterface,
  UserInterface,
} from '../Interfaces/interface';

import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class DataBaseService {
  private URL_LOGIN = enviroment.URL_LOGIN;
  private URL_NOTES = enviroment.URL_NOTES;
  private URL_USERS = enviroment.URL_USERS;
  private URL_VERIFY = enviroment.URL_VERIFY;
  private TOKEN = this.cookieSvc.get('token');

  constructor(private http: HttpClient, private cookieSvc: CookieService) {}

  // Headers
  getHeaders() {
    this.TOKEN = this.cookieSvc.get('token');
    const headers = {
      authorization: `Bearer ${this.TOKEN}`,
    };
    return headers;
  }

  // User methods
  NewUser(form: NewUser): Observable<NewUser> {
    const body = {
      userName: form.userName,
      user: form.user,
      password: form.password,
    };

    return this.http.post<NewUser>(this.URL_USERS, body);
  }

  login(data: Login): Observable<UserInterface> {
    const body = {
      userName: data.userName,
      password: data.password,
    };

    return this.http.post<UserInterface>(this.URL_LOGIN, body);
  }

  verifyToken() {
    return this.http.get(this.URL_VERIFY, {
      headers: this.getHeaders(),
    });
  }

  // Notes methods
  Get(): Observable<OwnNoteInterface[]> {
    return this.http.get<OwnNoteInterface[]>(this.URL_USERS, {
      headers: this.getHeaders(),
    });
  }

  Post(form: NoteInterface): Observable<NoteInterface> {
    const body = {
      title: form.title,
      content: form.content,
      important: form.important,
      favorite: form.favorite,
    };

    return this.http.post<NoteInterface>(this.URL_NOTES, body, {
      headers: this.getHeaders(),
    });
  }

  Delete(noteID: string): Observable<NoteInterface> {
    return this.http.delete<NoteInterface>(`${this.URL_NOTES}/${noteID}`, {
      headers: this.getHeaders(),
    });
  }

  update(form: any, noteID: string): Observable<NoteInterface> {
    const body = {
      content: form.content,
    };

    return this.http.put<NoteInterface>(`${this.URL_NOTES}/${noteID}`, body, {
      headers: this.getHeaders(),
    });
  }
}
