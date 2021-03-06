import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { Todo } from '../model/todo';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });
    service = TestBed.get(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get single item correctly', fakeAsync(() => {
    let item: Todo;
    service.addTodo('test value', '0');
    service.getSingleTodo('0').subscribe((result: Todo) => {
      item = result;
    });
    expect(item).not.toBeDefined();
    tick(200);
    expect(item).toBeDefined();
  }));

  it('should get todoitems correctly', fakeAsync(() => {
    let items;
    service.getAllTodos().subscribe((result: Todo[]) => {
      items = result;
    });
    expect(items).not.toBeDefined();
    tick(200);
    expect(items).toBeDefined();
  }));

  it('should add todoitems correctly', fakeAsync(() => {
    let items: Todo[];
    service.getAllTodos().subscribe((result: Todo[]) => {
      items = result;
    });
    tick(200);
    expect(items.length).toBe(0);

    service.addTodo('description');

    service.getAllTodos().subscribe((result: Todo[]) => {
      items = result;
    });
    tick(200);
    expect(items.length).toBe(1);
  }));

  it('should update todoitems correctly', fakeAsync(() => {
    const addedToDo = service.addTodo('description');

    addedToDo.description = 'Fabian';

    const singleTodo = service.updateTodo(addedToDo);

    expect(singleTodo.description).toBe('Fabian');
    let items: Todo[];
    service.getAllTodos().subscribe((result: Todo[]) => {
      items = result;
    });
    tick(200);
    expect(items[0].description).toBe('Fabian');
  }));

  it('should delete todoitems correctly', fakeAsync(() => {
    const addedToDo = service.addTodo('description');

    let items: Todo[];
    service.getAllTodos().subscribe((result: Todo[]) => {
      items = result;
    });
    tick(200);
    expect(items.length).toBe(1);

    service.deleteTodo(addedToDo.id);

    service.getAllTodos().subscribe((result: Todo[]) => {
      items = result;
    });
    tick(200);
    expect(items.length).toBe(0);
  }));
});
