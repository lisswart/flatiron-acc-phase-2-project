import FlashCard from "./FlashCard";

function FlashCardsDeck({ cards, deleteCard }) {
    function displayCards() {
        return cards.map((card) => {
            return (
                <FlashCard card={card} key={card.id} deleteCard={deleteCard} />
            );
        });
    }
    return (
        <ul>
            {displayCards()}
        </ul>
    );
}

export default FlashCardsDeck;
