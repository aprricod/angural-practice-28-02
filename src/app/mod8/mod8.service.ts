import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Mod8Service {
  users;
  constructor(public http: HttpClient) {}
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments');
  }
  initUsers() {
    this.users = this.getUsers();
  }
}
