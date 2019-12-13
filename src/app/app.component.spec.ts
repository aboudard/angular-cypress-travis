import { AppModule } from './app.module';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Todo } from './model/todo';
import { TodoService } from './shared/todo.service';
import { of } from 'rxjs';

const todoServiceStub = {
  updateTodo(toUpdate: Todo) {
    return toUpdate;
  },
  getAllTodos() {
    return of([]);
  }
};

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let todoService: TodoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppModule],
      declarations: [],
      providers: [{ provide: TodoService, useValue: todoServiceStub }]
    }).compileComponents();
    todoService = TestBed.get(TodoService);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'appv7'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('appv7');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to appv7!'
    );
  });

  it('should call update service', () => {
    const todoSpy = spyOn(todoService, 'updateTodo').and.callThrough();
    component.markAsDone(new Todo('0', new Date(), 'test', false));
    fixture.detectChanges();
    expect(todoSpy).toHaveBeenCalled();
  });
});
