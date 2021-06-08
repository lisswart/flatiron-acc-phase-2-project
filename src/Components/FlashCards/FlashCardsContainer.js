import "./FlashCards.css";
import MainPanel from "./MainPanel";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

function FlashCardsContainer() {
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        fetch(`https://hidden-harbor-11546.herokuapp.com/words`)
            .then(r => r.json())
            .then(cardObjs => {
                console.log(cardObjs);
                setCards(cardObjs);
            });
    }, []);
    console.log(cards);

    return (
        <div className="flashcards-container">
            <Sidebar cards={cards}/>
            <MainPanel />  
        </div>
    );
}

export default FlashCardsContainer;
