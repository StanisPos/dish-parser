import * as React from 'react';
import RecipesList from './components/List';

export const Recipes: React.FC<any> = React.memo(() => {
  return (
    <>
      <h1>Recipes</h1>
      <RecipesList />
    </>
  );
});
