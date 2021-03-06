// import FlashCard from "./FlashCard";
import { useState } from "react";
import EditForm from "./EditForm";

function FlashCardViewer({ viewCard }) {
    const {cardId, toView} = viewCard;
    const [cardToView, setCardToView] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editFormState, setEditFormState] = useState({
        headword: "",
        functionalLabel: "",
        definition: "",
        verbalIllustration: ""
    })

    function handleToggleEditMode() {
        setIsEditMode(!isEditMode);
    }

    function editCard(cardId, updatedCard) {
        fetch(`https://hidden-harbor-11564.herokuapp.com/words/${cardId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({updatedCard})
        })
            .then(r => r.json())
            .then(console.log);
    }
    

    function getCard(cardId) {
        fetch(`https://hidden-harbor-11564.herokuapp.com/words/${cardId}`)
            .then(r => r.json())
            .then(card => {
                console.log(card);
                setCardToView({
                    ...cardToView,
                    card
                });
            });
    }
    return (
        <div>
            {getCard()}
            <button onClick={handleToggleEditMode}>Edit</button>
            {isEditMode && <EditForm cardId={cardId} editFormState={editFormState} setEditFormState={setEditFormState} editCard={editCard} />}
        </div>
    );
}

export default FlashCardViewer;
