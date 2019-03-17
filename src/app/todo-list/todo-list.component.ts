import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() items: Todo[] = [];
  @Output() markedAsDone = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  markAsDone(item: Todo) {
    this.markedAsDone.emit(item);
  }

}
