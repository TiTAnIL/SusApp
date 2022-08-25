import { storageService } from "./note-storage.service.js"
import { utilService } from './note-util.service.js'

export const NoteService = {
    query,
    remove
}

const KEY = 'notesDB'

var gNotesType = ['text', 'image', 'video', 'todo']

var gNotes = [
    {
        "_id": "63065d68ee68b790a57067e5",
        "index": 0,
        "type": "text",
        "about": "esse eiusmod non duis ipsum"
    },
    {
        "_id": "63065d684043217818eabf19",
        "index": 1,
        "type": "text",
        "about": "minim sunt culpa amet excepteur"
    },
    {
        "_id": "63065d68c41dceb41d0431b6",
        "index": 2,
        "type": "text",
        "about": "proident cupidatat adipisicing pariatur laborum"
    },
    {
        "_id": "63065d689316cac20b61f41b",
        "index": 3,
        "type": "text",
        "about": "voluptate Lorem consectetur aute et"
    },
    {
        "_id": "63065d6824558e7c6eb5e140",
        "index": 4,
        "type": "text",
        "about": "eiusmod ullamco ex ipsum culpa"
    },
    {
        "_id": "63065d68188148d42b99e3e4",
        "index": 5,
        "type": "todo",
        "about": "nulla in dolore incididunt qui"
    },
    {
        "_id": "63065d68ef1c9f47d355a605",
        "index": 6,
        "type": "image",
        "about": "non cupidatat commodo deserunt excepteur"
    },
    {
        "_id": "63065d68c5937882b57400e1",
        "index": 7,
        "type": "video",
        "about": "occaecat voluptate do sint nostrud"
    }
]

function query() {
    let notes = _loadFromStorage()
    if (!notes) {
        notes = _createNotes()
        _saveToStorage(notes)
    }

    return Promise.resolve(notes)
}

function _createNotes() {
    return gNotes
}

function remove(noteId){
    let notes = _loadFromStorage()
    notes = notes.filter(note => note.id !== noteId)
    _saveToStorage(notes)
    return Promise.resolve()
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}

function _saveToStorage(books) {
    storageService.saveToStorage(KEY, books)
}