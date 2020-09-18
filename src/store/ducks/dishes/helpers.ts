import { isEmpty } from 'lodash';

export const setAddDishes = (prevState: any, dish: any): any => ({
  dishes: !isEmpty(dish) ? [...prevState.dishes, dish] : prevState.dishes,
  count: !isEmpty(dish) ? ++prevState.count : prevState.count,
});
