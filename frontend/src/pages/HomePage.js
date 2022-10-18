import React from "react";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import ChatBox from "../components/ChatBox";

import img from '../assets/img/header-img.svg';

import '../App.css';

export default function HomePage() {
  return (
    <div>
      <header className="header">
        <h1>Bienvenido a SuperSupport</h1>
      </header>
      <section>
        <Row xs={1} md={2} className="g-4">
        <Col>
          <Card bg="primary" text="white">
            <Card.Header>¿Que es?</Card.Header>
            <Card.Body>
            Esta página es un ejemplo de lo que seria un chat asistido para recibir ayuda personalizada en su propia página
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="primary" text="white">
            <Card.Header>¿Que hace?</Card.Header>
            <Card.Body>
            Puedes dejar una pregunta en el cuadro de texto de abajo y nosotros lo recibimos en la parte de Admin, 
            a donde tambien puedes acceder para ver como funciona.
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="primary" text="white">
            <Card.Header>Acerca de mi</Card.Header>
            <Card.Body>
            Soy Jonatan Palacios y soy desarrollador web buscando un empleo, si llegaste hasta aqui puedes dejarme un mensaje en el mismo cuadro de texto de abajo
            o 
             <Button variant="info"><a hre="https://www.linkedin.com/in/palacios-yonatan/" target="_blank">Visitame en mi Linkedin</a></Button>
            </Card.Body>
          </Card>
        </Col>
    </Row>
      </section>
      <section>
        <img src={img}></img>
      </section>
      <ChatBox />
    </div>
  );
}
