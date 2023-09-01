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
UpdateOn :boolean =false;

@Output()
remove = new EventEmitter();

@Output()
update = new EventEmitter();

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
    this.remove.emit(article.id);
  }

  updateArticleOn(){
    this.UpdateOn =true;
  }

  updateArticle(newTitle: HTMLInputElement){
    this.update.emit(newTitle);
    this.UpdateOn =false;
    console.log("new title"+ newTitle.value);
    

  }
}
