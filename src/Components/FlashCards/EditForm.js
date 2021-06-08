

function EditForm({ cardId, editFormState, setEditFormState, editCard }) {

    function handleEditChange(event) {
        const fieldName = event.target.name;
        const userInput = event.target.value;
        setEditFormState({
            ...editFormState,
            [fieldName]: userInput
        });
    }

    function handleEditFormSubmit(event) {
        event.preventDefault();
        const updatedCard = {
            headword: editFormState.headword,
            functionalLabel: editFormState.functionalLabel,
            definition: editFormState.definition,
            verbalIllustration: editFormState.verbalIllustration
        }
        editCard(updatedCard);
    }

    return (
        <div className="form-view">
            <form onSubmit={handleEditFormSubmit}>
                <div className="inputbox">
                    <label>headword: </label>
                    <input type="text" name="headword" 
                        value={editFormState.headword} 
                        onChange={handleEditChange} />
                </div>
                <div className="inputbox">
                    <label>functional label: </label>
                    <input type="text" name="functionalLabel" 
                        value={editFormState.functionalLabel} 
                        onChange={handleEditChange} />
                </div>
                <div className="inputbox">
                    <label>definition: </label>
                    <input type="text" name="definition" 
                        value={editFormState.definition} 
                        onChange={handleEditChange} />
                </div>
                <div className="inputbox">
                    <label>verbal illustration: </label>
                    <input type="text" name="verbalIllustration" 
                        value={editFormState.verbalIllustration} 
                        onChange={handleEditChange} />
                </div>
                <button>Save</button>
                <button>Cancel</button>
            </form>
        </div>
    );
}

export default EditForm;

