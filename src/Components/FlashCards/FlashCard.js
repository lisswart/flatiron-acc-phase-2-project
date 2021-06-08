function FlashCard({ card, deleteCard }) {
    const {id, headword, functionalLabel, definition, verbalIllustration} = card;

    function handleDeleteClick() {
        deleteCard(id);
    }

    return (
        <div className="flashcard">
            <p>headword: {headword}</p>
            <p>functional label:{functionalLabel}</p>
            <p>definition: {definition}</p>
            <p>verbal illustration: {verbalIllustration}</p>
            <button className="button" style={{marginBottom: "1em"}} onClick={handleDeleteClick}>Delete</button>
        </div>
    );
}

export default FlashCard;
