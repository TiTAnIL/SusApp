import { storageService } from "./note-storage.service.js"
import { utilService } from './note-util.service.js'

export const NoteService = {
    query,
    remove,
    editNote,
    selectNoteColor,
    pinNote
}

const KEY = 'notesDB'

var gNotesType = ['text', 'image', 'video', 'todo']

var gNotes = [
    {
        _id: '1',
        type: 'text',
        text: 'esse eiusmod non duis ipsum',
        isSelect: false
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
        url: <iframe width="560" height="315" src="https://www.youtube.com/embed/_Sx3he4ABw0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
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
    console.log('changing color!',noteId)
    return Promise.resolve()
}

function pinNote(noteId) {
    console.log('note pinned!',noteId)
    return Promise.resolve()
}

function editToDo(noteId){

}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}

function _saveToStorage(books) {
    storageService.saveToStorage(KEY, books)
}