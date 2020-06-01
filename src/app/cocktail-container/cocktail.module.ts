import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailsDetailsComponent } from './cocktails-details/cocktails-details.component';
import { CocktailEditComponent } from './cocktail-edit/cocktail-edit.component';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { CocktailContainerComponent } from './cocktail-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { cocktailRounting } from './cocktail.routing';

@NgModule({
  declarations: [
    CocktailsListComponent,
    CocktailsDetailsComponent,
    CocktailContainerComponent,
    CocktailEditComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    cocktailRounting
  ],
  providers:[],
  exports:[]
})
export class CocktailModule { }
