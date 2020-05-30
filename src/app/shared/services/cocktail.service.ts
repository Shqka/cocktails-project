import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cocktail } from '../models/cocktail.model';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { 
    this.initCocktails();
  }

  initCocktails(): void {
    this.http.get<Cocktail[]>('https://cocktails-project.firebaseio.com/cocktails.json').subscribe( (cocktails: Cocktail[]) => {
      this.cocktails.next(cocktails);
    })
  }


  getCocktail (index: number): Observable<Cocktail> {
    return this.cocktails.pipe(
      filter( (cocktails: Cocktail[]) => cocktails != null),
      map( (cocktails: Cocktail[]) => cocktails[index])
    );
  }


  addCocktail (cocktail: Cocktail){

    const cocktails = this.cocktails.value;

    cocktails.push({
      name: cocktail.name,
      img: cocktail.img,
      desc: cocktail.desc,
      ingredients: cocktail.ingredients
    });
    this.saveCocktail();
    this.cocktails.next(cocktails);
  }


  editCocktail (editCocktail: Cocktail): void {
    
    const cocktails = this.cocktails.value;
    let index = cocktails.map( c => c.name ).indexOf(editCocktail.name);
    /* 
    on peut également récupérer l'index avec findIndex comme ceci :
    let index = cocktails.findIndex( c => c.name === editCocktail.name); 
     */
    cocktails[index] = editCocktail;
    this.cocktails.next(cocktails);
    this.saveCocktail();
    
  }

  saveCocktail(): void {
    this.http.put('https://cocktails-project.firebaseio.com/cocktails.json', this.cocktails.value).subscribe();
  }

}
