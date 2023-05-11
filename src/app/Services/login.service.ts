import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private URL_LOGIN = enviroment.URL_LOGIN;

  constructor(private http: HttpClient) {}


}
