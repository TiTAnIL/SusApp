import { TodoNote } from "./note-todo.service.js"

export function NotePreview({ note, onRemoveNote, onEditNote, onSelectColor, onPinNote }) {
    console.log(note)
    switch (note.type) {
        case 'text':
            return <article className="note-container">
                <div className="note">
                    {note.text}
                </div>
                <div className="btns-container">
                    <button className="delete-note-btn" onClick={() => onRemoveNote(note._id)}>
                        <img className="icon" src="assets/img/bin.png" />
                    </button>
                    <button className="edit-note-btn" onClick={() => onEditNote(note._id)}>
                        <img className="icon" src="assets/img/compose.png" />
                    </button>
                    <button className="send-note-btn" >
                        <img className="icon" src="assets/img/email.png" />
                    </button>
                    <button className="select-note-color-btn" onClick={() => onSelectColor(note._id)}>
                        <img className="icon" src="assets/img/palette.png" />
                    </button>
                    <button className="pin-note-btn" onClick={() => onPinNote(note._id)}>
                        <img className="icon" src="assets/img/pin.png" />
                    </button>
                </div>
            </article>
        case 'image':
            return <article className="note-container">
                <div className="note">
                    <img className="note-img" src="assets/img/bin.png" />
                </div>
                <div className="btns-container">
                    <button className="delete-note-btn" onClick={() => onRemoveNote(note._id)}>
                        <img className="icon" src="assets/img/bin.png" />
                    </button>
                    <button className="send-note-btn" >
                        <img className="icon" src="assets/img/email.png" />
                    </button>
                    <button className="pin-note-btn" onClick={() => onPinNote(note._id)}>
                        <img className="icon" src="assets/img/pin.png" />
                    </button>
                </div>
            </article>
        case 'video':
            return <article className="note-container">
                <div className="note">
                    {note.url}
                </div>
                <div className="btns-container">
                    <button className="delete-note-btn" onClick={() => onRemoveNote(note._id)}>
                        <img className="icon" src="assets/img/bin.png" />
                    </button>
                    <button className="send-note-btn" >
                        <img className="icon" src="assets/img/email.png" />
                    </button>
                    <button className="pin-note-btn" onClick={() => onPinNote(note._id)}>
                        <img className="icon" src="assets/img/pin.png" />
                    </button>
                </div>
            </article>
        case 'todo':
            return <article className="note-container">
                <div className="note">
                    {/* <TodoNote /> */}
                </div>
                <div className="btns-container">
                    <button className="delete-note-btn" onClick={() => onRemoveNote(note._id)}>
                        <img className="icon" src="assets/img/bin.png" />
                    </button>
                    <button className="edit-note-btn" onClick={() => onEditNote(note._id)}>
                        <img className="icon" src="assets/img/compose.png" />
                    </button>
                    <button className="send-note-btn" >
                        <img className="icon" src="assets/img/email.png" />
                    </button>
                    <button className="select-note-color-btn" onClick={() => onSelectColor(note._id)}>
                        <img className="icon" src="assets/img/palette.png" />
                    </button>
                    <button className="pin-note-btn" onClick={() => onPinNote(note._id)}>
                        <img className="icon" src="assets/img/pin.png" />
                    </button>
                </div>
            </article>
    }
}
