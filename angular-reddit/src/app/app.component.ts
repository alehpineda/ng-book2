import { Component } from '@angular/core';
import { Article } from './article/article.model'; //Import nuevo

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[]; //Propiedad del componente

  constructor(){
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('AngularJs', 'http://angular.io', 1),
      new Article('Bootstrap', 'https://getbootstrap.com', 0),
    ];
  }
  addArticle( title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log(`Agregando titulo: ${title.value} y link: ${link.value} al articulo`);
    return false;
  };
}
