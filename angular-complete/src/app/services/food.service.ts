import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
    return sample_foods
  }
  //search food
  getAllFoodBySearchTerm(searchTerm:string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  //get all tags
  getAllTags():Tag[]{
    return sample_tags
  }
  //get food by tag
  getAllFoodByTag(tag:string):Food[]{
    return tag === "All"? this.getAll():this.getAll().filter(food=>food.tags.includes(tag));
  }
  //get all food by ID
  getFoodById(foodId: string): Food {
    return this.getAll().find(food => food.id === foodId) ?? new Food();
  }
}
