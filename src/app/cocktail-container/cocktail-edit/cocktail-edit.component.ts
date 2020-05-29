import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Cocktail } from 'src/app/shared/models/cocktail.model';

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css']
})
export class CocktailEditComponent implements OnInit {

  public cocktailForm: FormGroup;
  public cocktail: Cocktail;
  private edit: boolean;

  constructor(private activatedRoute: ActivatedRoute ,private fb: FormBuilder, private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(( params: Params) => {
      if (params.index) {
        this.edit = true;
        this.cocktailService.getCocktail(params.index).subscribe( (cocktail: Cocktail) => {
          this.cocktail = cocktail;
          this.createForm(this.cocktail);
        });
      } else {
        this.edit = false;
        this.createForm();
      }
    })
  }

  createForm(cocktail = { name: (''), img: (''), desc: (''), ingredients: []}) {
    this.cocktailForm = this.fb.group({
      name: [cocktail.name, Validators.required], // raccourci sans new FormControl()
      img: new FormControl(cocktail.img, Validators.required), // avec new FormControl() qui est facultatif
      desc: [cocktail.desc],
      ingredients: this.fb.array(cocktail.ingredients.map(ingredient => this.fb.group( { name: ingredient.name, quantity: ingredient.quantity } )))
    })
}

  saveCocktail() {
    if (this.edit) {
      this.cocktailService.editCocktail(this.cocktailForm.value);
    } else {
      this.cocktailService.addCocktail(this.cocktailForm.value);
    }
  }

  get ingredients(): FormArray {
    return this.cocktailForm.get('ingredients') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(this.fb.group({
      name: new FormControl (''),
      quantity: new FormControl (''),
    }));
  }

  removeIngredient(index: number) {
    return this.ingredients.removeAt(index);
  }

}
