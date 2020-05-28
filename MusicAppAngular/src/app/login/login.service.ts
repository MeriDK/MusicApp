import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {
  constructor(
    private http: HttpClient
  ) {
  }
  loginUser(user) {
    return this.http.post('http://127.0.0.1:8000/login/', user);
  }
}
