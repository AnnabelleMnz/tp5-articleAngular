import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseLogsComponent } from './release-logs.component';

describe('ReleaseLogsComponent', () => {
  let component: ReleaseLogsComponent;
  let fixture: ComponentFixture<ReleaseLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReleaseLogsComponent]
    });
    fixture = TestBed.createComponent(ReleaseLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
