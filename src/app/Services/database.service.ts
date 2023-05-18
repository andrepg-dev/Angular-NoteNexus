import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { enviroment } from 'src/environments/environment';
import {
  Login,
  NewUser,
  NoteInterface,
  UserInterface,
} from '../Interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class DataBaseService {
  private URL_LOGIN = enviroment.URL_LOGIN;
  private URL_NOTES = enviroment.URL_NOTES;
  private URL_REGISTER = enviroment.URL_REGISTER;
  private TOKEN = window.localStorage.getItem('token');

  constructor(private http: HttpClient) {}

  // Headers
  getHeaders() {
    this.TOKEN = window.localStorage.getItem('token');
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

    return this.http.post<NewUser>(this.URL_REGISTER, body);
  }

  login(data: Login): Observable<UserInterface>{
    const body = {
      userName: data.userName,
      password: data.password,
    };

    return this.http.post<UserInterface>(this.URL_LOGIN, body);
  }

  // Notes methods
  Get(): Observable<NoteInterface[]> {
    return this.http.get<NoteInterface[]>(this.URL_NOTES, {
      headers: this.getHeaders(),
    });
  }

  Post(form: NoteInterface): Observable<NoteInterface> {
    const body = {
      content: form.content,
      important: form.important,
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
