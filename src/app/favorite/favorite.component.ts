import { Component, OnInit, Input } from '@angular/core';
// import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
  // inputs: ['isFavorite']// not advised
})
export class FavoriteComponent implements OnInit {

  // @Input('is-favorite') isFavorite: boolean;
  @Input('is-favorite') isFavorite: boolean;
  // isFavorite: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    console.log('clicked');
  }

}
