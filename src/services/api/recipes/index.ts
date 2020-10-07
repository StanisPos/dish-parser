import { api } from '@services/api';

export class Recipe {
  static url = '/recipes';

  static getList(): Promise<Recipe[]> {
    return api.get(Recipe.url);
  }
}
