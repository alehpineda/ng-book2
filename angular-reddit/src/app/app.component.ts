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
      new Article('Bootstrap', 'http://getbootstrap.com', 0),
    ];
  }
  addArticle( title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log(`Agregando titulo: ${title.value} y link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0)); //Nuevo valor
    title.value=''; //Reestablece el valor a ''
    link.value=''; //Reestablece el valor a ''
    return false;
  };
}
