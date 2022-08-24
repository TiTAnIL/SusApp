import { NoteList } from "../cmps/note-list.jsx"
// import { notePreview } from "../cmps/note-preview.jsx"
import { noteService } from "../services/note.service.js"


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
        noteService.query(this.state)
            .then((notes) => this.setState({ notes }))
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


