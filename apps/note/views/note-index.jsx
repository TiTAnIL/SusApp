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
        NoteService.remove(noteId)
            .then(() => {
                console.log('Removed!')
                const notes = this.state.notes.filter(note => note.id !== noteId)
                showSuccessMsg('Note removed')
          

            })
            .catch(err => {
                console.log('Problem!!', err)
                showErrorMsg('Cannot remove note')
            })
    }
    
    render() {
        const { notes } = this.state
        return (
            <main className="notes-container">
                <NoteList notes={notes} />
            </main>
        )
    }
}


