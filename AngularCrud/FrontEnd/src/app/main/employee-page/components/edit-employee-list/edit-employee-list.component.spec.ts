import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeListComponent } from './edit-employee-list.component';

describe('EditEmployeeListComponent', () => {
  let component: EditEmployeeListComponent;
  let fixture: ComponentFixture<EditEmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
