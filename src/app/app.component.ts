import { Component, OnInit } from '@angular/core';
import { Article } from './article/article.model';
import { ArticleService } from './service/article.service';
import { HttpserviceService } from './service/httpservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
model = new Article('','',0);

  title = 'tp2-appArticles';
  articles: Article[] = [];
  updateOn: boolean = false;
  selectedArticle: Article = new Article('dummy', 'link',0);

  // le articleService recupere le HTTPService et crée  la fonction getArticles qui fait le .get
  constructor(private service: HttpserviceService, private router: Router) {}

  ngOnInit(): void {
    this.service
      .getArticles()
      .subscribe(restArticles => this.articles = restArticles, error => console.log('!!!!!!!!!!!!'));     
  }

  addArticle() {
    this.service.postArticles(new Article(this.model.title, this.model.link)).subscribe();
    this.model.title = '';
    this.model.link = '';
    console.log(`Adding article title: ${this.model.title} and link: ${this.model.link}`);
    location.reload();
    return false;
    // empeche rechargement de la page
  }
  
// methode pour supprimer par Input id
  deleteArticle(idToDelete: HTMLInputElement) {
    const idSearched = (idToDelete.value);
    
    if (!idSearched) {
      return; // Ne rien faire si le titre est vide
    }
    // on recherche l'id
    const index = this.articles.findIndex((article) => article.id === parseInt(idSearched));
    if (index !== -1) {
      this.articles.splice(index, 1); // Supprime l'article à l'index trouvé
      idToDelete.value = ''; // Réinitialise le champ de saisie
      console.log(`METHODE EN INPUT  : Deleted article with id: ${idSearched} index ${index}`);
      this.service.deleteArticles(index).subscribe(()=>
      this.getArticles())
      
    } else {
      console.log(`Article with title ${idSearched} not found.`);
    }
    location.reload();
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  getArticles(){
    this.service.getArticles().subscribe(a=> this.articles =a);
  }

  handleArticleRemoval(id :number) {
      this.articles.splice(id, 1); // Supprime l'article à l'index trouvé
      console.log(`Deleted article with id: ${id}`);
      this.service.deleteArticles(id).subscribe(()=>
      this.getArticles())
      location.reload();
    return false;
  }
}
