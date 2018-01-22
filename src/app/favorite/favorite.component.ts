import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() change= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
    console.log('clicked');
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
