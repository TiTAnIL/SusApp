import { NewNoteBox } from "./new-note-box.jsx"
import { NoteService } from "../services/note.service.js"
import { utilService } from './note-util.service.js'

export class NewNote extends React.Component {

    state = {
        note: {
            _id: '',
            type: 'text',
            text: '',
            isSelect: false,
            openPalette: false
        }
    }

    componentDidMount() {
        this.loadNote()
    }

    loadNote = () => {
        const newId = utilService.makeId(6)
        this.setState(({note}) => ({
            note: { ...note, _id: newId }
        }))
    }
    
    handleChange = ({target}) => {
        this.setState(({note}) => ({
            note: { ...note, text: target.value }
        }))
    }

    onSaveNote = () => {
        NoteService.createNote(this.state.note)
        .then(() => {
            console.log('created')
        })
        .catch(err => {
            console.log('Problem!!', err)
        })
    }

    render() {
        return <section className="new-note-container">
            <div className="input-btns">
                <form onSubmit={this.onSaveNote}>
                    <input type="text" className="new-note" placeholder="create note.." onChange={this.handleChange}/>
                </form>
                <button>uplod image</button>
                <button>add viedo link</button>
                <button>create todo list</button>
            </div>
        </section>
    }
}