import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibFirstComponent } from './my-lib-first.component';

describe('MyLibFirstComponent', () => {
  let component: MyLibFirstComponent;
  let fixture: ComponentFixture<MyLibFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLibFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLibFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
