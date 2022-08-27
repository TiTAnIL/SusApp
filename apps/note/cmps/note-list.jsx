import { NotePreview } from "./note-preview.jsx"


export function NoteList({ notes, onRemoveNote, onEditNote, onSelectColor, onPinNote }) {

    return <section className="notes-display">
        {notes.map(note => 
        <NotePreview 
        className="note"
         key={note._id} 
         note={note} 
         onRemoveNote={onRemoveNote}
         onEditNote={onEditNote}
         onSelectColor={onSelectColor}
         onPinNote={onPinNote}
         />)}
    </section>
}