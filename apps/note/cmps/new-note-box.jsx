export function NewNoteBox({handleInputViaTextBox}) {
    const txt = 'hi'
    return <div className="input-btns">
        <form>
            <input type="text" className="new-note" placeholder="create note.." onChange={() => handleInputViaTextBox()}/>
        </form>

    </div>
}