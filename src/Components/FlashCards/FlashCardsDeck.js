import FlashCard from "./FlashCard";

function FlashCardsDeck({ cards, deleteCard, setViewCard }) {
    function displayCards() {
        return cards.map((card) => {
            return (
                <FlashCard card={card} key={card.id} 
                    deleteCard={deleteCard} 
                    setViewCard={setViewCard} 
                />
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
