import FlashCardsDeck from "./FlashCardsDeck";

function Sidebar({ cards }) {

    return (
        <div className="master-detail-element sidebar">
            <FlashCardsDeck cards={cards} />
            <button className="button">New</button>
        </div>
    );
}

export default Sidebar;
