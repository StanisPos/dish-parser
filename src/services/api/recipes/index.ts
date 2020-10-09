import { api } from '@services/api';

export class Recipe {
  private static url = '/recipes';

  static getList(): Promise<Recipe[]> {
    return api.get(Recipe.url);
  }
}
