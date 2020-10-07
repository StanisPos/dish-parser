import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { requestRecipes } from '@ducks/dishes/actions';
import { selectRecipes } from '@ducks/dishes/selectors';
import { RecipeItem } from './RecipeItem';

const RecipesList: React.FC<any> = React.memo(({ getAllRecipes, recipes }): any => {
  React.useEffect(() => {
    getAllRecipes();
  }, [recipes.length]);

  return (
    <>
      {recipes.map(recipe => (
        <RecipeItem {...recipe} key={recipe.id} />
      ))}
    </>
  );
});

const mapStateToProps = createStructuredSelector({
  recipes: selectRecipes,
});

const mapDispatchToProps = {
  getAllRecipes: requestRecipes,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
