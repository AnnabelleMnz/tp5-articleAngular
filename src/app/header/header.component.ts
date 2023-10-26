import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }

  @Output()
  add = new EventEmitter();

addArticleButton : boolean = false;
  ngOnInit(): void {
  }

  onAddNewArticle() {
    this.router.navigateByUrl('create');
  }

  onAddArticle(){
    this.addArticleButton =true;
    
  }
}
