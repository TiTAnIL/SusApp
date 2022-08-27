// import { TodoNote } from "./note-todo.service.js"

export function NotePreview({ note, onRemoveNote, onEditNote, onSelectColor, onPinNote }) {
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
                    <label>
                        <img className="icon" src="assets/img/palette.png" />
                        <input type="color" className="select-note-color-btn" onChange={onSelectColor(this)} />
                    </label>
                    <button className="pin-note-btn" onClick={() => onPinNote(note._id)}>
                        <img className="icon" src="assets/img/pin.png" />
                    </button>
                </div>
            </article>
        case 'image':
            return <article className="note-container">
                <div className="note">
                    <img className="note-img" src={note.url} />
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
            // {let videoSrc = note.src}
            // console.log(videoSrc)
            return <article className="note-container">
                <div className="note">
                    <iframe className="video" src="https://www.youtube.com/embed/_Sx3he4ABw0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
