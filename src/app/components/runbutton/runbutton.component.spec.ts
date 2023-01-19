import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunbuttonComponent } from './runbutton.component';

describe('RunbuttonComponent', () => {
  let component: RunbuttonComponent;
  let fixture: ComponentFixture<RunbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
