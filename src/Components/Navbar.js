import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/">Home Page</NavLink>
            <NavLink to="/flashcards">FlashCards</NavLink>
            <NavLink to="/dictionary">Dictionary</NavLink>
            <NavLink to="/hangman">Hangman</NavLink>
        </div>
    );
}

export default Navbar;
