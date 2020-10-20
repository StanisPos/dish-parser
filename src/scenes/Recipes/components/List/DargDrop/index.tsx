import * as React from 'react';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { Dish } from '@ducks/dishes/interfaces';
import { Item } from './Item';

type Props = Dish & {
  index: number;
};

const StyledRow = styled(Row)`
  margin-bottom: 20px;
`;

export const DragDrop: React.FC<Props> = React.memo(({ index, ...props }) => (
  <Draggable draggableId={props.id.toString()} index={index}>
    {provided => (
      <StyledRow ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        <Item {...props} />
      </StyledRow>
    )}
  </Draggable>
));
