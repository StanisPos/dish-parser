type Minerals = {
  [key: string]: number;
};

type DishPart = {
  id: number | string;
  name: string;
  image: string;
  quantity: number;
  units: 'л' | 'кг' | 'шт';
  proteins: number;
  fats: number;
  carbohydrates: number;
  calories: string;
  glycemicIndex: number;
  breadUnit: number;
  minerals?: Minerals;
};

export type Dish = DishPart & {
  composition: DishPart[];
};

export type RecipesState = {
  recipes: Dish[];
  count: number;
};
