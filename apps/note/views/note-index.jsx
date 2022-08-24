// import { BookDetails } from "./book-details.jsx"
// import { BookFilter } from "../cmps/book-filter.jsx"
// import { BookList } from "../cmps/book-list.jsx"
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
        noteService.query(this.state.filterBy)
            .then(books => {
                this.setState({ notes })
            })
    }
    
    render() {
        const { notes } = this.state
        return <section className="notes-app">

        </section>
    }
}


