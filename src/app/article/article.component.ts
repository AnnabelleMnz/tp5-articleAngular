import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
@Input()
article: Article;

@Output()
remove = new EventEmitter();

  constructor(){
    this.article = new Article('', '', 0);
  }

  voteUp(): boolean{
    this.article.voteUp();
    return false;
  }

  voteDown(){
    this.article.voteDown();
    return false;
  }

  removeArticle(article:Article){
    this.remove.emit(article);
  }
}
