import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import helpapawbackground from '../Assets/helpapawbackground.jpg';

const JumboContainer = styled(Jumbo)`
  background: url(${helpapawbackground}) no-repeat fixed bottom;
  background-size: cover;
  color: #efefef;
  height: 250px;
  position: relative;
  z-index: -2;
`;

const Overlay = styled.div`
  background-color: #000;
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

const Jumbotron = () => (
  <JumboContainer fluid>
    <Overlay />
    <Container>
      <h1>Welcome</h1>
      <p>Help a Paw</p>
    </Container>
  </JumboContainer>
);

export default Jumbotron;
