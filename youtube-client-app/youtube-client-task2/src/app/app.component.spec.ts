import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  const fixture: ComponentFixture<AppComponent>;

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    const app: app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'YouTube-client-app'`, () => {
    fixture = TestBed.createComponent(AppComponent);
    const app: app = fixture.componentInstance;
    expect(app.title).toEqual('YouTube-client-app');
  });

  it('should render title', () => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled: compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).
    toContain('YouTube-client-app app is running!');
  });
});
