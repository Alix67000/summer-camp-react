import React from "react";
import { Card, Col } from "react-bootstrap";

const CardsActivites = ({ cardItem }) => {
  return (
    <Col>
      <Card className="cards-activites">
        <img src={cardItem.picture} alt="solidarite" />
        <Card.Body>
          <h3>{cardItem.titre}</h3>
          <p>{cardItem.info}</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardsActivites;
