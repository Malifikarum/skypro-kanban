import CardsItem from "./CardsItem";


function Column({ title, cardList }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cardList.map((card) =>
        <CardsItem
        key = {card.id}
        title = {card.title}
        date = {card.date}
        topic = {card.topic}
        />)}     
      </div>
    </div>
  );
}

export default Column;
