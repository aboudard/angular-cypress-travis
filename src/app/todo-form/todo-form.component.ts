import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html'
})
export class TodoFormComponent implements OnInit {

  @Output() todoAdded = new EventEmitter<string>();
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
