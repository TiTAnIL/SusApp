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
                console.log(notes,'yoyyo');
                this.setState({ notes })
            })
            .catch(err => {
                console.log('Problem!!', err)
            })
    }
    
    render() {
        const { notes } = this.state
        return (
            <main className="notes-container">
                <NoteList notes={notes} onRemoveNote={this.onRemoveNote} />
            </main>
        )
    }
}


