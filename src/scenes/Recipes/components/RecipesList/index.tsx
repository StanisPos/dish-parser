import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { requestRecipes } from '@ducks/dishes/actions';
import { selectRecipes } from '@ducks/dishes/selectors';
import { throttle, DebouncedFunc } from 'lodash';
import { SyntheticEvent } from 'react';
import { RecipeItem } from './RecipeItem';

const RecipesList: React.FC<any> = React.memo(({ getAllRecipes, recipes }): any => {
  const [width, setWidth] = React.useState(100);

  React.useEffect(() => {
    getAllRecipes();
  }, [recipes.length]);

  const mouseMove = ({ clientX, currentTarget }) => evt => {
    const test = currentTarget.offsetWidth - (clientX - evt.clientX);
    console.log(test);
    // setWidth(Number(test.toFixed(1)));
    // console.log(test.toFixed(1));
  };

  let handle: DebouncedFunc<typeof mouseMove>;

  const handleSlim = evt => {
    handle = throttle(mouseMove(evt), 300);
    document.addEventListener('mousemove', handle);
    console.log(evt.clientX);
  };

  const asd = evt => {
    console.log(evt.clientX);
    document.removeEventListener('mousemove', handle);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div onMouseUp={asd}>
      {recipes.map((recipe: any) => (
        <RecipeItem {...recipe} key={recipe.id} handleSlim={handleSlim} />
      ))}
    </div>
  );
});

const mapStateToProps = createStructuredSelector({
  recipes: selectRecipes,
});

const mapDispatchToProps = {
  getAllRecipes: requestRecipes,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
