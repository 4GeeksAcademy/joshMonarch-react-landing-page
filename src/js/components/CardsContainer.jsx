import Card from './Card';

const cardInfo = {
  imgURL: [
    "https://shorturl.at/IJCmX", 
    "https://shorturl.at/avZ97",
    "https://shorturl.at/Uoloi",
    "https://shorturl.at/gTyQL",
    "https://shorturl.at/fUdMO",
    "https://shorturl.at/DEA2E"
  ],
  cardTitle: [
    "Avocado",
    "Apple",
    "Cherry",
    "Cashew",
    "Lemon",
    "Strawberry",
  ],
  cardDescription: [
    "Avocados are a nutrient-rich fruit known for their creamy texture and healthy fats.",
    "Apples are a popular fruit, known for their crisp texture and sweet-tart flavor.",
    "Cherries are small, round fruits that are sweet or tart, often enjoyed fresh.",
    "Cashews are a type of nut that is creamy and slightly sweet, often used in cooking.",
    "Lemons are citrus fruits known for their bright yellow color and tangy flavor.",
    "Strawberries are sweet, red berries that are popular in desserts and as a snack.",
  ],
};
const cardElements = cardInfo.imgURL.map((imgURL, index) => {
  return (
    <Card 
      key={index}
      imgURL={imgURL}
      cardTitle={cardInfo.cardTitle[index]}
      cardDescription={cardInfo.cardDescription[index]}
    />
  );
});

const CardsContainer = () => {
  return (
    <div className="d-flex flex-sm-row flex-column flex-wrap px-3 my-3 w-100 justify-content-between">
      {cardElements}
    </div>
  )
}

export default CardsContainer;