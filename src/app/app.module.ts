import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormsModule } from '@angular/forms';
import { RealeaseFormComponent } from './components/realease-form/realease-form.component';
import { VersionControlComponent } from './components/version-control/version-control.component';
import { ReleaseLogsComponent } from './components/release-logs/release-logs.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { FormAddArticleComponent } from './form-add-article/form-add-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    TemplateDrivenFormComponent,
    RealeaseFormComponent,
    VersionControlComponent,
    ReleaseLogsComponent,
    HeaderComponent,
    HomePageComponent,
    ListArticlesComponent,
    FormAddArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
