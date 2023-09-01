import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../article/article.model';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private client:HttpClient) {

   
   }
   getArticles(): Observable<Article[]> {
    return this.client.get<Article[]>('http://localhost:3000/articles');
  }

  postArticles(article : Article) : Observable<Article[]> {
    return this.client.post<Article[]>('http://localhost:3000/articles', article);
  }

   deleteArticles(id : number) : Observable<any> {
    return this.client.delete('http://localhost:3000/articles/'+id);
  }
}
