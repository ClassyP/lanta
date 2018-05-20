import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Navbar } from '../Navbar'


export default class Header extends React.Component {    

  render() {
    return (
        <div>
          <Jumbotron fluid>
            <Container fluid>
              <Navbar />
              <h1 className="display-3">LANTA CONSULTANTS</h1>
              <p className="lead"></p>
            </Container>
          </Jumbotron>
        </div>
      );
    }

};



  

