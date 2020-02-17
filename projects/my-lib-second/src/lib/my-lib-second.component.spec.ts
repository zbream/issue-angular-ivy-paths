import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibSecondComponent } from './my-lib-second.component';

describe('MyLibSecondComponent', () => {
  let component: MyLibSecondComponent;
  let fixture: ComponentFixture<MyLibSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLibSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLibSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
