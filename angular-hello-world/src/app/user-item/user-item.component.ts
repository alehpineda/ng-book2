import { Component, OnInit, Input /*Agregado*/ } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() name: string; // <-- Agregado anotacion Input

  constructor() { } // Eliminamos la variable

  ngOnInit() {
  }

}
