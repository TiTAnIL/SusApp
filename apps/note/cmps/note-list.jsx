import { NotePreview } from "./note-preview.jsx"


export function NoteList({ notes }) {

    return <section className="notes-app">
        {notes.map(note => <NotePreview className="note" key={note.id} note={note} />)}
    </section>
}