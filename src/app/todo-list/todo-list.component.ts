import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {

  @Input() items: Todo[] = [];
  @Output() markedAsDone = new EventEmitter<Todo>();

  markAsDone(item: Todo): void {
    this.markedAsDone.emit(item);
  }

}
