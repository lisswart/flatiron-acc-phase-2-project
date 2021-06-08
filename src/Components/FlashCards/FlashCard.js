function FlashCard({ card }) {
    const {headword, functionalLabel, definition, verbalIllustration} = card;

    return (
        <div className="flashcard">
            <p>headword: {headword}</p>
            <p>functional label:{functionalLabel}</p>
            <p>definition: {definition}</p>
            <p>verbal illustration: {verbalIllustration}</p>
            <button className="button" style={{marginBottom: "1em"}}>Delete</button>
        </div>
    );
}

export default FlashCard;
