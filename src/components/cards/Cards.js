import React from "react";
import { Card, Col } from "react-bootstrap";

const Cards = ({ cardsInfo }) => {
  return (
    <Col>
      <Card className="cards-content card text-center shadow-sm ">
        <img src={cardsInfo.picture} alt="solidarite" />
        <Card.Body>
          <h3>{cardsInfo.titre}</h3>
          <p>{cardsInfo.info}</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;
