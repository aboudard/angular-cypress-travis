import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';
import { Todo } from './model/todo';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'appv7';

  items: Todo[] = [];
  constructor(public todoService: TodoService, private meta: Meta) {
    this.meta.addTag({ name: 'description', content: 'How to build Angular app with Travis CI and Sonar Cloud' });
    this.meta.addTag({ name: 'author', content: 'Alain Boudard' });
    this.meta.addTag({ name: 'twitter:site', content: '@aboudard' });
  }

  ngOnInit() {
    this.todoService
      .getAllTodos()
      .subscribe((items: Todo[]) => (this.items = items));
  }

  addTodo(description: string) {
    this.todoService.addTodo(description);
    this.todoService
      .getAllTodos()
      .subscribe((items: Todo[]) => (this.items = items));
  }

  markAsDone(todo: Todo) {
    todo.done = true;
    this.todoService.updateTodo(todo);
  }
}
