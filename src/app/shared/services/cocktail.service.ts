import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../models/cocktail.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    new Cocktail('Mojito',
     'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mojito_003.jpg/220px-Mojito_003.jpg',
    'Le mojito est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche. Inspiré du mint julep, et variante des Ti-punch des Antilles, Daïquiri, et Cuba libre, il est né à Cuba dans les Caraïbes dans les années 1910.',
    [
      new Ingredient('eau gazeuse', 1),
      new Ingredient('citron vert', 1),
      new Ingredient('feuilles de menthe', 6),
      new Ingredient('cl de rhum blanc', 4)
    ]
    ),
   new Cocktail('Margarita',
   'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Blended_Margarita.jpg/170px-Blended_Margarita.jpg',
   'La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C\'est un before lunch qui serait une version du cocktail daisy dans lequel on remplaça le brandy par de la téquila1 durant la prohibition, période où les Américains ouvrirent des bars au Mexique et au Canada dans les zones frontalières.',
   [
    new Ingredient('perrier', 1),
    new Ingredient('citron vert', 2),
    new Ingredient('cl de tequila', 5)
  ]
   ),
   new Cocktail('Sour',
   'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Whiskey_sour.jpg/220px-Whiskey_sour.jpg',
   'Un aigre est une famille traditionnelle de boissons mélangées. Des exemples courants de sours sont la margarita et le side-car. Les sours appartiennent à l\'une des anciennes familles de cocktails originaux et sont décrits par Jerry Thomas dans son livre de 1862, How to Mix Drinks.',
   [
    new Ingredient('whisky', 1),
    new Ingredient('citron jaune', 1),
    new Ingredient('sirop de sucre', 3),
  ]
   )
  ]);


  public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails.value[0]);

  selectCocktail (index: number): void {
    this.cocktail.next(this.cocktails.value[index]);
  }

  constructor() { }
}
