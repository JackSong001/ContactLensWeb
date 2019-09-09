import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOneTypeComponent } from './list-one-type.component';

describe('ListOneTypeComponent', () => {
  let component: ListOneTypeComponent;
  let fixture: ComponentFixture<ListOneTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOneTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOneTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
