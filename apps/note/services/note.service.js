import { storageService } from "./note-storage.service.js"
import { utilService } from './note-util.service.js'

export const NoteService = {
    query,
    remove,
    editNote,
    selectNoteColor,
    pinNote,
    createNote
}

const KEY = 'notesDB'

var gNotesType = ['text', 'image', 'video', 'todo']

var gNotes = [
    {
        _id: '1',
        type: 'text',
        text: 'esse eiusmod non duis ipsum',
        isSelect: false,
        openPalette: false
    },
    {
        _id: '2',
        type: 'image',
        url: 'assets/img/star.png',
        isSelect: false
    },
    {
        _id: '3',
        type: 'video',
        src: 'https://www.youtube.com/embed/_Sx3he4ABw0',
        isSelect: false
    },
    {
        _id: '4',
        type: 'todo',
        text: 'todo todo todo',
        isSelect: false
    }
]

function query() {
    let notes = _loadFromStorage()
    if (!notes || !notes.length) {
        notes = _createNotes()
        _saveToStorage(notes)
    }
    return Promise.resolve(notes)
}

function _createNotes() {
    return gNotes
}

function remove(noteId) {
    let notes = _loadFromStorage()
    notes = notes.filter(note => note._id !== noteId)
    _saveToStorage(notes)
    return Promise.resolve()
}

function editNote(noteId) {
    let notes = _loadFromStorage()
    var note = notes.filter(note => note._id === noteId)
    console.log('we are in', note)
    return Promise.resolve()
}

function selectNoteColor(noteId) {
    console.log('changing color!', noteId)
    let notes = _loadFromStorage()
    var index = notes.findIndex(note => note._id === noteId)
    console.log(index)
    return Promise.resolve()
}

function pinNote(noteId) {
    console.log('note pinned!', noteId)
    return Promise.resolve()
}

function editToDo(noteId) {

}

function createNote(note){
    var newNote = note
    let notes = _loadFromStorage()
    notes.push(newNote)
    _saveToStorage(notes)
    console.log(newNote)
    return Promise.resolve()
} 

function createTextNote(val) {
    let notes = _loadFromStorage()
    const newTextNote = {

    }
    console.log(newTextNote)
    return Promise.resolve()
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}

function _saveToStorage(books) {
    storageService.saveToStorage(KEY, books)
}