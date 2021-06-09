
import { Link } from "react-router-dom";

function FlashCard({ card, deleteCard, isOnEditMode, setIsOnEditMode, cardToBeEdited, setCardToBeEdited }) {

    const {id, headword, functionalLabel, definition, verbalIllustration} = card;

    function handleEditClick() {
        setIsOnEditMode(!isOnEditMode);
        setCardToBeEdited({
            ...cardToBeEdited,
            id: id,
            headword: headword,
            functionalLabel: functionalLabel
        });
    }

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

            <Link to={`/words/${id}`} className="link">
                <h1 style={{textAlign: "center"}} className="headword-link">{headword}</h1><br></br>
            </Link>
            <p><i>headword: </i><br></br>{headword}</p><br></br>
            <p><i>functional label: </i><br></br>{functionalLabel}</p><br></br>
            <p><i>definition: </i><br></br>{definition}</p><br></br>
            <p><i>verbal illustration: </i><br></br>{verbalIllustration}</p><br></br>
            <button className="button" onClick={handleEditClick}>Edit</button>

            <button className="button" style={{marginBottom: "1em"}} onClick={handleDeleteClick}>Delete</button>
        </div>
    );
}

export default FlashCard;
