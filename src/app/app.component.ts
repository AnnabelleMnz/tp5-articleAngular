import { Component, OnInit } from '@angular/core';
import { Article } from './article/article.model';
import { ArticleService } from './service/article.service';
import { HttpserviceService } from './service/httpservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'tp2-appArticles';
  articles: Article[] = [];
  updateOn: boolean = false;
  selectedArticle: Article = new Article('dummy', 'link', 0);

  // constructor(private service: ArticleService){
  //   this.articles = service.getArticles();}

  // le articleService recupere le HTTPService et crée  la fonction getArticles qui fait le .get
  constructor(private service: HttpserviceService) {}

  ngOnInit(): void {
    this.service
      .getArticles()
      .subscribe(restArticles => this.articles = restArticles, error => console.log('!!!!!!!!!!!!'));
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    this.service.postArticles(new Article(title.value, link.value)).subscribe();
    title.value = '';
    link.value = '';
    console.log(`Adding article title: ${title} and link: ${link}`);
    location.reload();
    return false;
    // empeche rechargement de la page
  }
  deleteArticle(titleToDelete: HTMLInputElement) {
    const title = titleToDelete.value;
    if (!title) {
      return; // Ne rien faire si le titre est vide
    }

    const index = this.articles.findIndex((article) => article.title === title);
    if (index !== -1) {
      this.articles.splice(index, 1); // Supprime l'article à l'index trouvé
      titleToDelete.value = ''; // Réinitialise le champ de saisie
      console.log(`Deleted article with title: ${title}`);
    } else {
      console.log(`Article with title ${title} not found.`);
    }
    return false;
  }

  reset() {}

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  handleArticleRemoval(article: Article) {
    const indexToRemove = this.articles.indexOf(article);
    if (indexToRemove !== -1) {
      this.articles.splice(indexToRemove, 1);
    }
    return false;
  }
}
