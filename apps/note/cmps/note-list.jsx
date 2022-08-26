import { NotePreview } from "./note-preview.jsx"


export function NoteList({ notes, onRemoveNote }) {

    return <section className="notes-app">
        {notes.map(note => <NotePreview className="note" key={note._id} note={note} onRemoveNote={onRemoveNote}/>)}
    </section>
}