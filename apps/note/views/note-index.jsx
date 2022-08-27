import { NewNote } from "../cmps/new-note.jsx"
import { NoteList } from "../cmps/note-list.jsx"
import { NoteService } from "../services/note.service.js"

export class NoteIndex extends React.Component {

    state = {
        notes: [],
        filterBy: null,
        selectedNote: null
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        console.log('Loading Notes')
        NoteService.query(this.state)
            .then((notes) => this.setState({ notes }))
    }

    onRemoveNote = (noteId) => {
        console.log(noteId)
        NoteService.remove(noteId)
            .then(() => {
                console.log('Removed!')
                const notes = this.state.notes.filter(note => note._id !== noteId)
                // const notes = this.state.notes.map(note => note._id === noteId ?newNote : note)
                console.log(notes, 'yoyyo');
                this.setState({ notes })
            })
            .catch(err => {
                console.log('Problem!!', err)
            })
    }

    onEditNote = (noteId) => {
        NoteService.editNote(noteId)
            .then(() => {
                console.log('EDITING!')

            })
            .catch(err => {
                console.log('Problem!!', err)
            })
    }

    onSelectColor = (noteId) => {
        NoteService.selectNoteColor(noteId)
            .then(() => {
                console.log('changing color!')
            })
            .catch(err => {
                console.log('Problem!!', err)
            })
    }

    onPinNote = (noteId) => {
        NoteService.pinNote(noteId)
            .then(() => {
                console.log('Note pinned!')
            })
            .catch(err => {
                console.log('Problem!!', err)
            })
    }

    onEditTodo = (noteId) => {
        NoteService.editToDo(noteId)
            .then(() => {
                console.log('Note pinned!')
            })
            .catch(err => {
                console.log('Problem!!', err)
            })
    }

    render() {
        const { notes } = this.state
        return (
            <main className="notes-home-page">
                <NewNote />
                <NoteList
                    notes={notes}
                    onRemoveNote={this.onRemoveNote}
                    onEditNote={this.onEditNote}
                    onSelectColor={this.onSelectColor}
                    onPinNote={this.onPinNote}
                />
            </main>
        )
    }
}


