import { storageService } from "../../../services/storage.service.js"

const KEY = 'mailsDB'

export const mailService = {
    query,
    remove
}


function getMails() {
    return gMails
}

function query() {
    let mails = _loadFromStorage()
    if (!mails) {
        mails = getMails()
        _saveToStorage(mails)
    }
    return Promise.resolve(mails)
}

function remove(mailId) {
    let mails = _loadFromStorage()
    mails = mails.filter(mail => mail.id !== mailId)
    _saveToStorage(mails)
    return Promise.resolve()
}

function _saveToStorage(val) {
    storageService.saveToStorage(KEY, val)
}

function _loadFromStorage() {
    storageService.loadFromStorage(KEY)
}


const gMails = [
    {
        "_id": "63063a9b0fce165fdfba7e07",
        "index": 0,
        "guid": "84b8cf98-edec-4adb-8618-10edf617a3dd",
        "isActive": true,
        "name": "Lorie Stephenson",
        "email": "loriestephenson@edecine.com",
        "about": "Sit elit dolore dolore commodo laboris qui irure nisi consequat. Eu duis duis id labore qui qui. Minim incididunt dolor deserunt dolor. Consequat ad esse aliquip consectetur excepteur exercitation culpa est quis in ut non culpa est. Nostrud do adipisicing adipisicing pariatur et et magna.\r\n",
        "title": "do non sit magna Lorem"
    },
    {
        "_id": "63063a9bc94cebb08bd90fe5",
        "index": 1,
        "guid": "99cffa0a-bd77-45ab-a60e-efbf8ebb7941",
        "isActive": true,
        "name": "Velez Rowland",
        "email": "velezrowland@edecine.com",
        "about": "Labore enim veniam officia minim ullamco. Dolor cupidatat dolor ut id voluptate. Voluptate non enim quis dolor nostrud reprehenderit dolore. Nulla qui fugiat elit eu laborum voluptate do voluptate voluptate cupidatat veniam cillum cillum. Reprehenderit sit enim proident dolor sit.\r\n",
        "title": "irure officia velit in pariatur"
    },
    {
        "_id": "63063a9b3875598c00e33fdb",
        "index": 2,
        "guid": "825bc163-4d7d-43a4-a74e-34b217d0f18c",
        "isActive": true,
        "name": "Jayne Nieves",
        "email": "jaynenieves@edecine.com",
        "about": "Pariatur dolor reprehenderit qui elit aliqua exercitation sit sunt. Proident dolor sit est elit labore deserunt voluptate tempor laboris qui aute. Occaecat sunt ullamco anim adipisicing tempor ea officia reprehenderit incididunt velit consequat amet fugiat commodo. Eu enim magna adipisicing minim ut aliquip labore id tempor commodo eiusmod sit.\r\n",
        "title": "laboris laborum dolore minim velit"
    },
    {
        "_id": "63063a9b6776466315940a0c",
        "index": 3,
        "guid": "0c475275-fd20-4609-b35e-46df821494b1",
        "isActive": true,
        "name": "Tasha Morgan",
        "email": "tashamorgan@edecine.com",
        "about": "Incididunt occaecat eiusmod exercitation amet exercitation fugiat dolor occaecat officia ipsum minim duis. Esse consequat esse tempor ex ut incididunt irure veniam qui. Eu cillum qui aute adipisicing eu Lorem esse est. Eiusmod esse proident in veniam tempor occaecat tempor ullamco esse ea dolor commodo exercitation. Commodo sunt ex proident magna excepteur dolore magna.\r\n",
        "title": "nisi dolore eu officia magna"
    },
    {
        "_id": "63063a9b4fa08de4d4a15265",
        "index": 4,
        "guid": "fed37cb2-aec6-49d8-bb37-ba3d33406069",
        "isActive": true,
        "name": "Leanna Mercado",
        "email": "leannamercado@edecine.com",
        "about": "Ullamco elit aliquip ipsum fugiat magna consequat reprehenderit dolore deserunt laborum proident veniam. Non officia adipisicing reprehenderit amet nulla tempor mollit et ea. Sunt adipisicing laborum mollit fugiat minim nulla quis ullamco. Non mollit consectetur laboris laborum. Cillum pariatur sint dolor commodo id enim voluptate ea.\r\n",
        "title": "aute fugiat reprehenderit qui esse"
    },
    {
        "_id": "63063a9bc8bab74cb5efeed2",
        "index": 5,
        "guid": "43b3acaf-eccc-4711-8b00-fd6341dfc48b",
        "isActive": true,
        "name": "Ina Lowery",
        "email": "inalowery@edecine.com",
        "about": "Veniam est voluptate velit reprehenderit id aute enim quis. Laborum est commodo amet aliqua adipisicing sint deserunt veniam quis nulla voluptate sunt. Laborum et nisi sunt proident ipsum reprehenderit officia sit irure. Esse irure occaecat ipsum nulla consectetur.\r\n",
        "title": "ipsum deserunt laborum minim ut"
    },
    {
        "_id": "63063a9bfeb94a54d3178011",
        "index": 6,
        "guid": "143ec27a-819c-4897-8924-53f476cb7df0",
        "isActive": true,
        "name": "Patricia Reese",
        "email": "patriciareese@edecine.com",
        "about": "Ullamco qui ipsum do nisi consectetur officia deserunt. Occaecat eiusmod irure eu amet elit mollit pariatur non cillum eiusmod. Nulla officia aute mollit ipsum. Labore tempor ullamco eiusmod duis. Est cillum eiusmod mollit commodo sint minim.\r\n",
        "title": "occaecat nostrud dolore eu ut"
    },
    {
        "_id": "63063a9b120fed65a7f61e5e",
        "index": 7,
        "guid": "f261635c-e011-400d-8c8b-13f837151356",
        "isActive": false,
        "name": "West Stafford",
        "email": "weststafford@edecine.com",
        "about": "Exercitation ipsum esse in pariatur proident deserunt pariatur. Qui anim ut deserunt sunt sunt eu sit id anim ad aute nisi. Nulla non minim aliqua occaecat deserunt minim ut occaecat proident aute consectetur ea sit. Ad ex elit dolor minim velit.\r\n",
        "title": "ipsum anim labore eu aute"
    }
]