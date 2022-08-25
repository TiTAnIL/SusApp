
export function NotePreview({ note }) {
    return <article className="note-container">
        <button className="delete-note btn" onClick>
            <img className="icon" src="assets/img/bin.png" />
        </button>
        <button className="edit-note btn" onClick>
            <img className="icon" src="assets/img/compose.png" />
        </button>
        <button className="send-note btn" onClick>
            <img className="icon" src="assets/img/email.png" />
        </button>
        <button className="select-note-color btn" onClick>
            <img className="icon" src="assets/img/palette.png" />
        </button>
        <button className="pin-note btn" onClick>
            <img className="icon" src="assets/img/pin.png" />
        </button>
    </article>
}