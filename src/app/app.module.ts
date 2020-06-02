import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { PanierComponent } from './panier/panier.component';
import { IngredientsListComponent } from './panier/ingredients-list/ingredients-list.component';
import { AppRouting } from './app.routing';
import { PanierService } from './shared/services/panier.service';
import { CocktailModule } from './cocktail-container/cocktail.module';
import { SharedModule } from './shared/modules/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    ActiveDirective,
    PanierComponent,
    IngredientsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    HttpClientModule,
    CocktailModule,
    SharedModule
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
