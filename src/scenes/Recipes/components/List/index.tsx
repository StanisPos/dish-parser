import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { requestRecipes, sortRecipes } from '@ducks/dishes/actions';
import { selectRecipes } from '@ducks/dishes/selectors';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Dish } from '@ducks/dishes/interfaces';
import { DragDrop } from './DargDrop';

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const RecipesList: React.FC<Props> = React.memo(({ getAllRecipes, recipes, sortItems }): any => {
  React.useEffect(() => {
    getAllRecipes();
  }, [recipes.length]);

  const reorder = (list: Dish[], startIndex: number, endIndex: number): Dish[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: any) => {
    if (!result.destination || result.destination.index === result.source.index) {
      return;
    }
    const items = reorder(recipes, result.source.index, result.destination.index);

    sortItems(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {recipes.map((recipe: Dish, i: number) => (
              <DragDrop {...recipe} key={recipe.id} index={i} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
});

const mapStateToProps = createStructuredSelector({
  recipes: selectRecipes,
});

const mapDispatchToProps = {
  getAllRecipes: requestRecipes,
  sortItems: sortRecipes,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
