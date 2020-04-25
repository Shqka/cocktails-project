import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {

  public cocktail = new Cocktail('Mojito', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mojito_003.jpg/220px-Mojito_003.jpg',
  'Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche. Inspiré du mint julep, et variante des Ti-punch des Antilles, Daïquiri, et Cuba libre, il est né à Cuba dans les Caraïbes dans les années 1910 (dont il est à ce jour un emblème exotique international).');

  constructor() { }

  ngOnInit(): void {
  }

}
