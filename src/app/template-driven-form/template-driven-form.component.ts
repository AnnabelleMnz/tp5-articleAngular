import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../service/article.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit{
  ArticleForm!: FormGroup;
  model = new Article('','',0);
  urlRegex! : RegExp;
  // ArticlePreview$!: Observable<Article>

  constructor(private formBuilder: FormBuilder, private ArticleService :ArticleService){}

  onSubmit(){
    console.log('Article title: '+ this.model.title+', link' + this.model.link)
  }
  ngOnInit(): void {
    this.ArticleForm = this.formBuilder.group({
      title: [null, Validators.required],
      link: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      votes: 0, 
    });

    // this.ArticlePreview$ = this.ArticleForm.valueChanges.pipe(
    //   map(formValue => ({
    //     ...formValue,
    //     createdDate: new Date(),
    //     snaps: 0,
    //     id: 0
    //   }))
    // );
  }
  
}
