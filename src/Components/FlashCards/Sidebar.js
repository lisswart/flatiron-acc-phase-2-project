import FlashCardsDeck from "./FlashCardsDeck";

function Sidebar({ cards, setNewCard, deleteCard }) {
    function handleNewCardClick() {
        setNewCard(true);
    }

    return (
        <div className="master-detail-element sidebar">
            <button className="new-button" onClick={handleNewCardClick}>New</button>
            <FlashCardsDeck cards={cards} deleteCard={deleteCard} />
        </div>
    );
}

export default Sidebar;
