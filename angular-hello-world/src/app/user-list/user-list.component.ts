import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names: string[]; // Declaro tipo string pero defino que es un arreglo con []

  constructor() {
    this.names = [ 'Ari', 'Carlos', 'Felipe', 'Cora', 'Alex'];
  }

  ngOnInit() {
  }

}
