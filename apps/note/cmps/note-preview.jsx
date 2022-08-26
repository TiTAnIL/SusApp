
export function NotePreview({ note, onRemoveNote }) {
    console.log(note)
    return <article className="note-container">
        <div className="note">
            {note.about}
        </div>
        <div className="btns-container">
            <button className="delete-note-btn" onClick={() => onRemoveNote(note._id)}>
                <img className="icon" src="assets/img/bin.png" />
            </button>
            <button className="edit-note-btn" >
                <img className="icon" src="assets/img/compose.png" />
            </button>
            <button className="send-note-btn" >
                <img className="icon" src="assets/img/email.png" />
            </button>
            <button className="select-note-color-btn" >
                <img className="icon" src="assets/img/palette.png" />
            </button>
            <button className="pin-note-btn" >
                <img className="icon" src="assets/img/pin.png" />
            </button>
        </div>
    </article>
}