

function NewFlashCardEntryForm({ addCard, formState, setFormState, setNewCard}) {

    function handleChange(event) {
        const fieldName = event.target.name;
        const userInput = event.target.value;
        setFormState({
            ...formState,
            [fieldName]: userInput
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        const card = {
            headword: formState.headword,
            functionalLabel: formState.functionalLabel,
            definition: formState.definition,
            verbalIllustration: formState.verbalIllustration
        };
        addCard(card);
        setNewCard(false);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>headword: </label>
                    <input type="text" onChange={handleChange} name="headword" value={formState.headword} />
                </div>
                <div>
                    <label>functional label: </label>
                    <input type="text" onChange={handleChange} name="functionalLabel" value={formState.functionalLabel} />
                </div>
                <div>
                    <label>definition: </label>
                    <input type="text" onChange={handleChange} name="definition" value={formState.definition} />
                </div>
                <div>
                    <label>verbal illustration: </label>
                    <input type="text" onChange={handleChange} name="verbalIllustration" value={formState.verbalIllustration} />
                </div>
                <button type="submit">Submit</button>
            </form>
            
        </div>
    );
}

export default NewFlashCardEntryForm;
