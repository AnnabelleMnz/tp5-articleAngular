import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealeaseFormComponent } from './realease-form.component';

describe('RealeaseFormComponent', () => {
  let component: RealeaseFormComponent;
  let fixture: ComponentFixture<RealeaseFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealeaseFormComponent]
    });
    fixture = TestBed.createComponent(RealeaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
