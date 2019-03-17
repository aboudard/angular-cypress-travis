import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() todoAdded = new EventEmitter();
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      todoDescription: new FormControl('', Validators.required)
    });
  }

  addTodo() {
    const payload = Object.assign({}, this.form.value);
    this.todoAdded.emit(payload.todoDescription);
    this.form.reset();
  }

}
