import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addArticle( title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log(`Agregando titulo: ${title.value} y link: ${link.value} al articulo`);
    return false;
  };
}
