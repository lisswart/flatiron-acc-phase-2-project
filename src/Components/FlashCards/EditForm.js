

function EditForm({ editFormState, setEditFormState, cardToBeEdited, isOnEditMode, setIsOnEditMode, editCard }) {

    function handleChange(event) {
        const fieldName = event.target.name;
        const userInput = event.target.value;
        setEditFormState({
            ...editFormState,
            [fieldName]: userInput
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const editedCard = {
            headword: cardToBeEdited.headword,
            functionalLabel: cardToBeEdited.functionalLabel,
            definition: editFormState.definition,
            verbalIllustration: editFormState.verbalIllustration
        }
        editCard(cardToBeEdited.id, editedCard);
    }

    function handleCancelClick() {
        setIsOnEditMode(!isOnEditMode);
    }

    return (
        <div className="form-view">
            <form onSubmit={handleSubmit}>
                <div className="inputbox" >
                    <strong>headword: </strong>{cardToBeEdited.headword}
                </div>
                <div className="inputbox" >
                    <strong>functional label: </strong>{cardToBeEdited.functionalLabel}
                </div>
                <div className="inputbox" >
                    <label><strong>definition: </strong></label>
                    <textarea onChange={handleChange} name="definition" value={editFormState.definition} />
                </div>
                <div  className="inputbox">
                    <label><strong>verbal illustration: </strong></label>
                    <textarea onChange={handleChange} name="verbalIllustration" value={editFormState.verbalIllustration} />
                </div>
                <button onClick={handleCancelClick}>Cancel</button>
                <button type="submit">Submit</button>
            </form>            
        </div>
    );
}

export default EditForm;
