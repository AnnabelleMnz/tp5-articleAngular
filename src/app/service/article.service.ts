import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  // getArticles():Article[]{
  // return [new Article('Argular 2','http://angular.io',13),
  // new Article('Fullstack','http://fullstack.io',1)]
  // }

  constructor(private client: HttpClient) {}

}
