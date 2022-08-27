import { NewNoteBox } from "./new-note-box.jsx"

export class NewNote extends React.Component {


    handleInputViaTextBox = () => {
    }

    render() {
        return (
            <section className="new-note-container">
                <NewNoteBox
                    onNewNote={this.handleInputViaTextBox}
                />
            </section>
        )
    }
}