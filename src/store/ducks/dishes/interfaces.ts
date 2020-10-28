type Minerals = {
  [key: string]: number;
};

interface DishPart {
  id: number | string;
  name: string;
  weight: number;
  quantity: string;
  proteins: number;
  fats: number;
  carbohydrates: number;
  calories: string;
  glycemicIndex: number;
  breadUnit: number;
  minerals?: Minerals;
}

export interface Dish extends DishPart {
  composition: DishPart[];
}

export interface RecipesState {
  recipes: Dish[];
  count: number;
}
