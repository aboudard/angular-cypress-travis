import { Component, OnInit } from "@angular/core";
import { TodoService } from "./shared/todo.service";
import { Todo } from "./model/todo";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  title = "appv7";

  items: Todo[] = [];
  constructor(public todoService: TodoService) {}

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
