import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <Container fluid>
            {this.props.children}
      </Container>
    );
  }
}
