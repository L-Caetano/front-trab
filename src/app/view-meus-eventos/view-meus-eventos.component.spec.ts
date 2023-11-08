import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMeusEventosComponent } from './view-meus-eventos.component';

describe('ViewMeusEventosComponent', () => {
  let component: ViewMeusEventosComponent;
  let fixture: ComponentFixture<ViewMeusEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMeusEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMeusEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
