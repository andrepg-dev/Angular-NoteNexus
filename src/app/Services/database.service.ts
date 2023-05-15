import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/environment';
import { NewUser, NoteInterface, UserInterface } from '../Interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class DataBaseService {
  private URL_LOGIN = enviroment.URL_LOGIN;
  private URL_NOTES = enviroment.URL_NOTES;
  private URL_REGISTER = enviroment.URL_REGISTER;
  private TOKEN = window.localStorage.getItem('token');

  constructor(private http: HttpClient) {}

  login(data: any): Observable<UserInterface> {
    const body = {
      userName: data.userName,
      password: data.password,
    };

    return this.http.post<UserInterface>(this.URL_LOGIN, body);
  }

  Get(): Observable<NoteInterface[]> {
    this.TOKEN = window.localStorage.getItem('token');

    const autorization = {
      authorization: `Bearer ${this.TOKEN}`,
    };

    return this.http.get<NoteInterface[]>(this.URL_NOTES, {
      headers: autorization,
    });
  }

  Post(form: NoteInterface): Observable<NoteInterface> {
    const body = {
      content: form.content,
      important: form.important,
    };

    const autorization = {
      authorization: `Bearer ${this.TOKEN}`,
    };

    return this.http.post<NoteInterface>(this.URL_NOTES, body, {
      headers: autorization,
    });
  }

  DeleteToken(){
    return window.localStorage.removeItem('token');
  }

  NewUser(form: NewUser): Observable<NewUser>{
    const body = {
      userName: form.userName,
      user: form.user,
      password: form.password,
    };

    return this.http.post<NewUser>(this.URL_REGISTER, body);
  }
}
