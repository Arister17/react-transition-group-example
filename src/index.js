import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CSSTransition } from 'react-transition-group';

import './styles.css';
function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Example name="danger" />
        </Col>
        <Col>
          <Example name="info" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Example name="primary" />
        </Col>
        <Col>
          <Example name="secondary" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Example name="light" />
        </Col>
        <Col>
          <Example name="success" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Example name="dark" />
        </Col>
        <Col>
          <Example name="warning" />
        </Col>
      </Row>
    </Container>
  );
}
function Example(casas) {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <Container style={{ paddingTop: '2rem' }}>
      {showButton && (
        <Button
          onClick={() => setShowMessage(true)}
          size="lg"
          variant={casas.name}
        >
          Show Message
        </Button>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Alert
          variant={casas.name}
          dismissible
          onClose={() => setShowMessage(false)}
        >
          <Alert.Heading>
            Animated alert message
          </Alert.Heading>
          <p>
            This alert message is being transitioned in and
            out of the DOM.
          </p>
          <Button
            onClick={() => setShowMessage(false)}
            variant={casas.name}
          >
            Close
          </Button>
        </Alert>
      </CSSTransition>
    </Container>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
