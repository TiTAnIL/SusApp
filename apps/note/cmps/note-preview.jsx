export function NotePreview({ notes }) {

    return <article className="note-container">
        <button className="delete-note-btn">delete</button>
        <button className="edit-note-btn">edit</button>
        <button className="email-note-btn">send</button>
        <div className="note-bgc-btn">note color</div>
        <div className="pin-note-btn">pin</div>
    </article>
}