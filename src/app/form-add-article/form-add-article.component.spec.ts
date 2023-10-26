import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddArticleComponent } from './form-add-article.component';

describe('FormAddArticleComponent', () => {
  let component: FormAddArticleComponent;
  let fixture: ComponentFixture<FormAddArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAddArticleComponent]
    });
    fixture = TestBed.createComponent(FormAddArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
