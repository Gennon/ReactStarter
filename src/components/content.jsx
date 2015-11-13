import React from 'react';
import { Jumbotron, Button, Row, Col } from 'react-bootstrap';
import Column from './column';

class Content extends React.Component{
  render() {
    return (
    <div>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
      </Jumbotron>
      <Row>
          <Column/>
          <Column/>
          <Column/>
      </Row>
    </div>
    );
  }
}

export default Content;

