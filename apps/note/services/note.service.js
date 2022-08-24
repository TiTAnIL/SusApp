import { storageService } from "./note-storage.service.js"
import { utilService } from './note-util.service.js'

export const noteService = {
    query,
    getById,
    remove,
    createReview,
    removeReview
}

const KEY = 'notesDB'
var gNotesType = ['text', 'image', 'video', 'todo']

function query() {
    let notes = _loadFromStorage()
    if (!notes) {
        notes = _createNotes()
        _saveToStorage(notes)
    }

    return Promise.resolve(notes)
}

function _createNotes() {
    const notes = []
    for (let i = 0; i < 7; i++) {
        const noteType = gNotesType[utilService.getRandomIntInclusive(0, gNotesType.length - 1)]
        notes.push(_createNote(noteType))
    }
    return cars
}

function _createNote(){
    return {
        id: utilService.makeId(),
        vendor,
        speed,
        desc: utilService.makeLorem()
    }

}


function getById(carId) {
    if (!carId) return Promise.resolve(null)
    const cars = _loadFromStorage()
    const car = cars.find(car => carId === car.id)
    return Promise.resolve(car)
}




function removeReview(name, bookId) {
    let books = _loadFromStorage()
    const bookIdx = books.findIndex(book => book.id === bookId)
    const reviews = books[bookIdx].reviews
    const reviewIdx = reviews.findIndex(review => review.fullName === name)
    reviews.splice(reviewIdx, 1)

    _saveToStorage(books)
    return Promise.resolve()
}

function createReview(review, bookId) {
    let books = _loadFromStorage()
    const bookIdx = books.findIndex(book => book.id === bookId)

    if (books[bookIdx].reviews) books[bookIdx].reviews.unshift(review)
    else {
        books[bookIdx].reviews = []
        books[bookIdx].reviews.push(review)
    }
    _saveToStorage(books)
    return Promise.resolve()
}

function getById(bookId) {
    if (!bookId) return Promise.resolve(null)
    const books = _loadFromStorage()
    const book = books.find(book => book.id === bookId)
    return Promise.resolve(book)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}

function _saveToStorage(books) {
    storageService.saveToStorage(KEY, books)
}