import { BookDetails } from "./book-details.jsx"
import { BookFilter } from "../cmps/book-filter.jsx"
import { BookList } from "../cmps/book-list.jsx"
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
        return (
            <div>note app</div>
        )
    }
}




export class BookApp extends React.Component {

    

    

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadBooks)
    }

    // onSelectBook = (bookId) => {
    //     bookService.getById(bookId)
    //         .then(book => this.setState({ selectedBook: book }))
    // }

    getPriceTxt = (currencyCode, amount) => {
        let priceTxt
        switch (currencyCode) {
            case 'EUR':
                priceTxt = amount + '€'
                break;
            case 'ILS':
                priceTxt = '₪' + amount
                break;
            case 'USD':
                priceTxt = '$' + amount
                break;
        }
        return priceTxt
    }

    render() {
        const { books, selectedBook } = this.state

        // {if(!books.length) return <h1>Loading...</h1>}

        return <section className="main-layout">
            {!selectedBook && <React.Fragment>
                <BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} />
                <BookList getPriceTxt={this.getPriceTxt}
                    books={books} />
            </React.Fragment>}
        </section>
    }
}