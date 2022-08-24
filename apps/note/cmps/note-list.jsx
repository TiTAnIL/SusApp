import { notePreview } from "./note-preview.jsx"


export function NotesList({ notes }) {

    return <section className="notes-app">
        {notes.map(note => <notePreview key={note.id} note={note} />)}
    </section>
}