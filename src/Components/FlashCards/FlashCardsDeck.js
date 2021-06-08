import FlashCard from "./FlashCard";

function FlashCardsDeck({ cards }) {
    function displayCards() {
        return cards.map((card) => {
            return (
                <FlashCard card={card} key={card.id} />
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
