import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormComponent } from './todo-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TodoFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('method #addTodo calls eventEmitter', () => {
    const testValue = 'test value';
    spyOn(component.todoAdded, 'emit');
    component.form.patchValue({
      todoDescription: testValue
    });
    component.addTodo();
    expect(component.todoAdded.emit).toHaveBeenCalledWith(testValue);
  });
});
