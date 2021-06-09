import "./FlashCards.css";
import MainPanel from "./MainPanel";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import NewFlashCardEntryForm from "./NewFlashCardEntryForm";

import EditForm from "./EditForm";
// import FlashCardViewer from "./FlashCardViewer";

// const URL = `https://hidden-harbor-11546.herokuapp.com/words`;
const LOCAL = `http://localhost:3000/words`;


function FlashCardsContainer() {
    const [cards, setCards] = useState([]);
    const [formState, setFormState] = useState({
        headword: "",
        functionalLabel: "",
        definition: "",
        verbalIllustration: ""
    });
    const [newCard, setNewCard] = useState(false);

    const [isOnEditMode, setIsOnEditMode] = useState(false);
    const [cardToBeEdited, setCardToBeEdited] = useState({
        id: undefined,
        headword: "",
        functionalLabel: ""
    });
    const [editFormState, setEditFormState] = useState({
        headword: "",
        functionalLabel: "",
        definition: "",
        verbalIllustration: ""

    });
    
    useEffect(() => {        
        fetch(LOCAL)
            .then(r => r.json())
            .then(cardObjs => {
                setCards(cardObjs);
            });
    }, []);

    function addCard(card) {
        fetch(LOCAL, {
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
        fetch(`${LOCAL}/${cardId}`, {
            method: "DELETE"            
        })
            .then(r => r.json())
            .then(() => {
                const updatedDeckOfCards = cards.filter(card => card.id !== cardId);
                setCards(updatedDeckOfCards);
            });
    }

    function editCard(id, updatedCard) {
        fetch(`${LOCAL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedCard)
        })
            .then(r => r.json())
            .then((updatedCard) => {
                const updatedCards = cards.map((card) => {
                    if(card.id === updatedCard.id) return updatedCard;
                    return card;
                });
                setCards(updatedCards);
            })
    }

    return (
        <div className="flashcards-container">
            <Sidebar cards={cards} 
                setNewCard={setNewCard} 

                isOnEditMode={isOnEditMode}
                setIsOnEditMode={setIsOnEditMode}
                cardToBeEdited={cardToBeEdited}
                setCardToBeEdited={setCardToBeEdited} 
                editCard={editCard} 
                deleteCard={deleteCard} />
            <Switch>
                {/* <Route exact path={"/words/:id"}>
                    <FlashCardViewer />
                </Route> */}
                <Route>
                    {
                        newCard ? <NewFlashCardEntryForm path={"/newCardEntryForm"}formState={formState} setFormState={setFormState} addCard={addCard} setNewCard={setNewCard} />
                        : isOnEditMode ? <EditForm editFormState={editFormState} 
                                                setEditFormState={setEditFormState} 
                                                cardToBeEdited={cardToBeEdited}
                                                isOnEditMode={isOnEditMode}
                                                setIsOnEditMode={setIsOnEditMode} 
                                                editCard={editCard} />
                        : <MainPanel />
                    } 
                </Route>
            </Switch>
            

        </div>
    );
}

export default FlashCardsContainer;
