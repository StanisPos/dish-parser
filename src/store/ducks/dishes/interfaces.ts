type Minerals = {
  [key: string]: string,
};

interface DishPart {
  id: number | string;
  name: string;
  weight: number;
  quantity: string;
  proteins: number;
  fats: number;
  carbohydrates: number;
  glycemicIndex: number;
  breadUnit: number;
  minerals?: Minerals;
}

export interface Dish extends DishPart {
  composition: DishPart[];
}

export interface RecipesState {
  dishes: Dish[];
  count: number;
}
