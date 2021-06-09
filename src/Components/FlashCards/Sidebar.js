import FlashCardsDeck from "./FlashCardsDeck";

function Sidebar({ cards, setNewCard, isOnEditMode, setIsOnEditMode, cardToBeEdited, setCardToBeEdited, editCard, deleteCard }) {
    function handleNewCardClick() {
        setNewCard(true);
    }

    return (
        <div className="master-detail-element sidebar">
            <button className="new-button" onClick={handleNewCardClick}>New</button>
            <FlashCardsDeck cards={cards} 
                isOnEditMode={isOnEditMode}
                setIsOnEditMode={setIsOnEditMode}
                cardToBeEdited={cardToBeEdited}
                setCardToBeEdited={setCardToBeEdited}
                editCard={editCard} 
                deleteCard={deleteCard} />
        </div>
    );
}

export default Sidebar;
