import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();

    return this.http.put('https://muse-recipe-book.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }
  // Method above passes an array of recipes to the put method. The put method will automatically turn
  // the array into json format. Once we subscribe the observable,  the put method returns.
  // This will send the request to the server.

  getRecipes() {
    const token = this.authService.getToken();

    this.http.get('https://muse-recipe-book.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          // const recipes: Recipe[] = response.json();
          // .json method extracts the data this response contains and turns it into a javascript object, or in this
          // case an array.
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
