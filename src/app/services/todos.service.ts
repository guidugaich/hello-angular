import { inject, Injectable } from '@angular/core';
import { Todos } from '../models/todos.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient);
  
  getTodosFromApi() {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    return this.http.get<Todos>(url);
  }
}
