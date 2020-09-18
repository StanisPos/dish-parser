import * as React from 'react';
import { connect } from 'react-redux';
import { addDish } from '@ducks/dishes/actions';

const Button: React.FC<any> = props => {
  const testingClick = React.useCallback(evt => {
    evt.preventDefault();
    props.addDish({ test: 'test' });
  }, []);

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        style={{ minHeight: '100px', minWidth: '200px' }}
        type="submit"
        onClick={testingClick}
      />
    </div>
  );
};

const mapDispatchToProps = {
  addDish,
};

export default connect(null, mapDispatchToProps)(Button);
