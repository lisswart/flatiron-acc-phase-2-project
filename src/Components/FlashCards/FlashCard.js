function FlashCard({ card, deleteCard, setViewCard }) {
    const {id, headword, functionalLabel, definition, verbalIllustration} = card;

    function handleDeleteClick() {
        deleteCard(id);
    }

    function handleViewClick() {
        setViewCard({
            cardId: id, 
            toView: true
        })
    }

    return (
        <div className="flashcard">
            <p>headword: {headword}</p>
            <p>functional label:{functionalLabel}</p>
            <p>definition: {definition}</p>
            <p>verbal illustration: {verbalIllustration}</p>
            <button className="button" onClick={handleViewClick}>View</button>
            <button className="button" style={{marginBottom: "1em"}} onClick={handleDeleteClick}>Delete</button>
        </div>
    );
}

export default FlashCard;
