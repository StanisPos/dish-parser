import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { noop } from 'lodash';
import { Button, Modal } from 'react-bootstrap';

interface Props extends RouteComponentProps {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundaryComponent extends React.PureComponent<Props, State> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // тут будет оправка ошибки на сервер для логгирования
    noop(error, errorInfo);
  }

  goToMainPage = () => {
    this.props.history.push('/main');
  };

  render() {
    if (this.state.hasError) {
      // страничка предупреждения об ошибке и возможности вернуться на главную страницу,
      // доделать как будет дизайн
      return (
        <Modal.Dialog size="lg" centered>
          <Modal.Header translate="en">
            <Modal.Title>Заголовок предупреждения</Modal.Title>
          </Modal.Header>
          <Modal.Body>Сообщение о том, что что-то пошло не так</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.goToMainPage}>
              Вернуться туда-то
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      );
    }

    return this.props.children;
  }
}

export const ErrorBoundary = withRouter(ErrorBoundaryComponent);
