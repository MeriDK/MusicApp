import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class RegistrationService {
  constructor(
    private http: HttpClient
  ) {
  }
  registerUser(user) {
    return this.http.post('http://127.0.0.1:8000/users/', user);
  }
}
