import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
// import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated // emulated(default) => emulates shadow dom, native =>
  //styles: [`.class {}`] // last defined rules will override
  // inputs: ['isFavorite']// not advised
})
export class FavoriteComponent  {

  // @Input('is-favorite') isFavorite: boolean;
  @Input('is-favorite') isFavorite: boolean;
  // isFavorite: boolean;

  @Output('change') change = new EventEmitter();


  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
    console.log('clicked');
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
