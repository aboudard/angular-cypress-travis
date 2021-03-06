import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private existingTodos: Todo[] = [];

  constructor() { }

  getAllTodos(): Observable<Todo[]> {
    return new Observable((observer: Observer<Todo[]>) => {
      setTimeout(() => {
        observer.next(this.existingTodos);
        observer.complete();
      }, 200);
    });
  }

  getSingleTodo(id: string): Observable<Todo> {
    return new Observable((observer: Observer<Todo>) => {
      setTimeout(() => {
        observer.next(this.existingTodos.find(x => x.id === id));
        observer.complete();
      }, 200);
    });
  }

  addTodo(description: string, id?: string): Todo {
    const toAdd: Todo = new Todo();
    toAdd.created = new Date();
    toAdd.id = id ? id : this.guid();
    toAdd.done = false;
    toAdd.description = description;
    this.existingTodos.push(toAdd);
    return toAdd;
  }

  updateTodo(toUpdate: Todo): Todo {
    this.existingTodos.forEach((todo) => this.existingTodos.find(o => o.id === todo.id));
    return toUpdate;
  }

  deleteTodo(id: string) {
    this.existingTodos = this.existingTodos.filter(item => item.id !== id);
  }

  private guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

}
