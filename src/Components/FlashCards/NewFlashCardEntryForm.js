

function NewFlashCardEntryForm() {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div><label></label><input /></div>
                <div><label></label><input /></div>
                <div><label></label><input /></div>
                <div><label></label><input /></div>
                <button type="submit">Submit</button>
            </form>
            
        </div>
    );
}

export default NewFlashCardEntryForm;
