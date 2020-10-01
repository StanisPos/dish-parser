import { api } from '@services/api';

export class Dishes {
  static url = '/dishes';

  static getList(): Promise<Dishes[]> {
    return api.get(Dishes.url);
  }
}
