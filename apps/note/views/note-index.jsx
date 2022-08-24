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
    
    render() {
        const { notes } = this.state
        return (
            <main className="notes-container">
                <NoteList notes={notes} />
            </main>
        )
    }
}


