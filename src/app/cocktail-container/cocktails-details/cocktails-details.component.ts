import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { PanierService } from 'src/app/shared/services/panier.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {

  public cocktail: Cocktail;
  public index: number;

  constructor(private activatedRoute: ActivatedRoute, private cocktailService: CocktailService, private panierService: PanierService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      if ( params.index ) {
        this.index = params.index;
      } else {
        this.index = 0;
      }
      this.cocktailService.getCocktail(this.index).subscribe( (cocktail: Cocktail) => {
        this.cocktail = cocktail;
      });
    })
  }


  addPanier(ingredients: Ingredient[]): void {
    this.panierService.addIngredients(ingredients);
  }

  getUrl() {
    return '/cocktails/' + this.index + '/edit';
  }

}
