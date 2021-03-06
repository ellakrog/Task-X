import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputHtmlComponent } from './input-html.component';

describe('InputHtmlComponent', () => {
  let component: InputHtmlComponent;
  let fixture: ComponentFixture<InputHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
