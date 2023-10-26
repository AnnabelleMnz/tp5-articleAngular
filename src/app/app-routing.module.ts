import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { FormAddArticleComponent } from './form-add-article/form-add-article.component';

const routes: Routes = [
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'', component: HomePageComponent},
  {path:'articles', component: ListArticlesComponent},
  {path:'add', component: FormAddArticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
