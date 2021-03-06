import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import FlashCardsContainer from "./Components/FlashCards/FlashCardsContainer";
import DictionaryContainer from "./Components/Dictionary/DictionaryContainer";
import HangmanContainer from "./Components/Hangman/HangmanContainer";

function App() {
  return (
    <div id="page-container">
      <div id="content-wrapper">
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>          
          <Route path="/flashcards">
            <FlashCardsContainer />
          </Route>
          <Route path="/dictionary">
            <DictionaryContainer />
          </Route>
          <Route path="/hangman">
            <HangmanContainer />
          </Route>
          <Route path="*">
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "darkgrey", color: "crimson", fontSize: "3em", paddingTop: "3em", paddingBottom: "3em"}}>404 Path Not Found ╮(╯▽╰)╭</div>
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
