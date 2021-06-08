import "./FlashCards.css";
import MainPanel from "./MainPanel";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import NewFlashCardEntryForm from "./NewFlashCardEntryForm";
import FlashCardViewer from "./FlashCardViewer";

function FlashCardsContainer() {
    const [cards, setCards] = useState([]);
    const [formState, setFormState] = useState({
        headword: "",
        functionalLabel: "",
        definition: "",
        verbalIllustration: ""
    });
    const [newCard, setNewCard] = useState(false);
    const [viewCard, setViewCard] = useState({
        cardId: undefined,
        toView: false
    });
    
    useEffect(() => {
        fetch(`https://hidden-harbor-11546.herokuapp.com/words`)
            .then(r => r.json())
            .then(cardObjs => {
                setCards(cardObjs);
            });
    }, []);

    function addCard(card) {
        fetch(`https://hidden-harbor-11546.herokuapp.com/words`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(card)
        })
            .then(r => r.json())
            .then(newCard => {
                const augmentedDeckOfCards = [...cards, newCard];
                setCards(augmentedDeckOfCards);
            });
    }

    function deleteCard(cardId) {
        fetch(`https://hidden-harbor-11546.herokuapp.com/words/${cardId}`, {
            method: "DELETE"            
        })
            .then(r => r.json())
            .then(() => {
                const updatedDeckOfCards = cards.filter(card => card.id !== cardId);
                setCards(updatedDeckOfCards);
            });
    }

    return (
        <div className="flashcards-container">
            <Sidebar cards={cards} 
                setNewCard={setNewCard} 
                deleteCard={deleteCard} 
                viewCard={viewCard}
                setViewCard={setViewCard}
            />
            {
                newCard 
                ? <NewFlashCardEntryForm formState={formState} setFormState={setFormState} addCard={addCard} setNewCard={setNewCard} />
                : viewCard.toView
                ? <FlashCardViewer viewCard={viewCard} /> 
                : <MainPanel />
            }
        </div>
    );
}

export default FlashCardsContainer;
