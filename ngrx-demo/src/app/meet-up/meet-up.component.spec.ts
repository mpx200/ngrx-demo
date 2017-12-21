import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetUpComponent } from './meet-up.component';

describe('MeetUpComponent', () => {
  let component: MeetUpComponent;
  let fixture: ComponentFixture<MeetUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
