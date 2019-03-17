import { Todo } from './../model/todo';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { By } from '@angular/platform-browser';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('method \'markAsDone\' calls eventEmitter', () => {
    spyOn(component.markedAsDone, 'emit');
    const item = new Todo();
    component.markAsDone(item);

    expect(component.markedAsDone.emit).toHaveBeenCalledWith(item);
  });

  it('should correctly render the passed @Input value', () => {
    const allListItems = fixture.debugElement.queryAll(By.css('li'));

    expect(allListItems.length).toBe(0);
    component.items = [new Todo(), new Todo()];

    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(2);
  });

});
