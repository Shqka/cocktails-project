import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  public panier: BehaviorSubject<Ingredient[]> = new BehaviorSubject<Ingredient[]>(null);

  constructor() { }


  addIngredients(ingredients: Ingredient[]): void {

    const currentValue = this.panier.value;

    if (currentValue) {
      this.panier.next(currentValue.concat(ingredients));
    } else {
      this.panier.next(ingredients);
    }

  }

}
