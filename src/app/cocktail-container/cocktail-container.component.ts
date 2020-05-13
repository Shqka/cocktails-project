import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/models/cocktail.model';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.css']
})
export class CocktailContainerComponent implements OnInit {

  public cocktails: Cocktail[] = [
    new Cocktail('Mojito', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mojito_003.jpg/220px-Mojito_003.jpg',
     'Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche. Inspiré du mint julep, et variante des Ti-punch des Antilles, Daïquiri, et Cuba libre, il est né à Cuba dans les Caraïbes dans les années 1910 (dont il est à ce jour un emblème exotique international).'),
    new Cocktail('Margarita',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Blended_Margarita.jpg/170px-Blended_Margarita.jpg',
    'La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C\'est un before lunch qui serait une version du cocktail daisy (qui signifie « marguerite » en français, « margarita » en espagnol) dans lequel on remplaça le brandy par de la téquila1 durant la prohibition, période où les Américains ouvrirent des bars au Mexique et au Canada dans les zones frontalières.'),
    new Cocktail('Sour',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Whiskey_sour.jpg/220px-Whiskey_sour.jpg',
    'Un aigre est une famille traditionnelle de boissons mélangées. Des exemples courants de sours sont la margarita et le side-car. Les sours appartiennent à l\'une des anciennes familles de cocktails originaux et sont décrits par Jerry Thomas dans son livre de 1862, How to Mix Drinks.')
  ];

  public cocktail: Cocktail;


  constructor() { }


  ngOnInit(): void {
    this.cocktail = this.cocktails[0];
  }

  updateCocktail(index: number): void {
    this.cocktail = this.cocktails[index];
  }

}
