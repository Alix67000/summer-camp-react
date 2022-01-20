import React from "react";
import { Container, Row } from "react-bootstrap";
import Cards from "../components/cards/Cards";
import CardsActivites from "../components/cards/CardsActivites";
import Header from "../components/header/Header";
import TabBar from "../components/tabs/TabBar";

const Home = () => {
  const cardData = [
    {
      id: 1,
      titre: "un engagement",
      info: "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/summer1.jpg",
    },
    {
      id: 2,
      titre: "solidarite",
      info: "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/summer3.jpg",
    },
    {
      id: 3,
      titre: "experiance",
      info: "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/summer4.jpg",
    },
  ];

  const cardActivitiesData = [
    {
      id: 1,
      titre: "Zone 51",
      info: "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/zone51.jpg",
    },
    {
      id: 2,
      titre: "Décibulles",
      info: "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/decibulles.jpg",
    },
    {
      id: 3,
      titre: "Visite Alsace",
      info: "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/strasbourg.jpg",
    },
    {
      id: 4,
      titre: "Visite Strasbourg",
      info: "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/summer4.jpg",
    },
    {
      id: 5,
      titre: "Visite Colmar",
      info: "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/colmar.jpg",
    },
    {
      id: 6,
      titre: "Emmaüs Strasbourg",
      info: "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/summer4.jpg",
    },
  ];

  return (
    <div>
      <Header />
      <Container fluid="md">
        <h2>Les chantiers d’été, c’est quoi ?</h2>
        <Row>
          {cardData.map((cardsInfo) => (
            <Cards key={cardsInfo.id} cardsInfo={cardsInfo} />
          ))}
        </Row>

        <h2>Comment ça se passe ?</h2>
        <TabBar />
        <h2>Nos activites !</h2>
        <Row>
          {cardActivitiesData.map((cardItem) => (
            <CardsActivites key={cardItem.id} cardItem={cardItem} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
