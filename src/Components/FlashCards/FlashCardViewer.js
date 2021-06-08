// import FlashCard from "./FlashCard";
import { useState } from "react";

function FlashCardViewer({ viewCard }) {
    const {cardId, toView} = viewCard;
    const [cardToView, setCardToView] = useState([]);

    function getCard(cardId) {
        fetch(`https://hidden-harbor-11564.herokuapp.com/words/${cardId}`)
            .then(r => r.json())
            .then(card => {
                console.log(card);
                setCardToView(card);
            });
    }
    return (
        <div>
            {getCard()}
            <button>Edit</button>
            <button>Save</button>
            <button>Cancel</button>
        </div>
    );
}

export default FlashCardViewer;
