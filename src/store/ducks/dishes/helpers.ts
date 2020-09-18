import { isEmpty } from 'lodash';

export const setAddDishes = (prevState: any, payload: any): any => ({
	dishes: !isEmpty(payload)
		? [...prevState.dishes, !isEmpty(payload) && payload]
		: prevState.dishes,
	count: !isEmpty(payload) ? ++prevState.count : prevState.count,
});
