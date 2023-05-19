import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispalyStudentComponent } from './dispaly-student.component';

describe('DispalyStudentComponent', () => {
  let component: DispalyStudentComponent;
  let fixture: ComponentFixture<DispalyStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispalyStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispalyStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
