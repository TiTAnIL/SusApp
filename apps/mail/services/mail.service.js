import { storageService } from "../../../services/storage.service"

export const mailService = {
    query,
}

KEY = 'mailsDB'

function query() {
    debugger
    let mails = _loadFromStorage()
    if (!mails) {
        mails = getMails()
        _saveToStorage(mails)
    }
    return Promise.resolve(mails)
}


function getMails() {
    console.log('getting mails from gMails')
    return gMails
}


function _saveToStorage(val) {
    storageService.saveToStorage(KEY, val)
}

function _loadFromStorage() {
    storageService.loadFromStorage(KEY)
}


const gMails = [
    {
        "_id": "630611d75d246bcdd90ba61c",
        "index": 0,
        "guid": "b6184126-0af3-4688-92e2-2df452e3c22e",
        "isActive": false,
        "name": "Candy Cannon",
        "email": "candycannon@quantasis.com",
        "about": "Ipsum dolor aliqua occaecat enim id nulla excepteur dolor. Magna tempor minim exercitation veniam in quis laborum est. Cupidatat minim eu do ullamco qui duis nulla ad. Non incididunt dolor Lorem minim enim aliqua ipsum magna et do consequat. Nulla exercitation non esse labore est. Aliqua amet consectetur duis consectetur id ea exercitation sunt aliquip occaecat aute dolor ipsum reprehenderit. Cupidatat adipisicing qui consectetur incididunt officia labore nisi sunt anim aliquip Lorem est.\r\n"
    },
    {
        "_id": "630611d71bb26a689610f8cf",
        "index": 1,
        "guid": "71966be5-d1ca-4634-8091-66ca7efd8fd6",
        "isActive": true,
        "name": "Jackson Oneil",
        "email": "jacksononeil@quantasis.com",
        "about": "Magna labore qui eiusmod irure excepteur sit sunt et sit velit minim deserunt ex sint. Velit nostrud est amet ut velit qui ex aliqua nulla ullamco. Consequat ipsum duis aute et aute sit. Ipsum est tempor esse cupidatat sint reprehenderit ea laboris voluptate anim consequat irure.\r\n"
    },
    {
        "_id": "630611d79e2c7a40c0f34701",
        "index": 2,
        "guid": "feab1208-d34b-4ddb-9ed8-d39b8b0fe82b",
        "isActive": true,
        "name": "Peggy Wolfe",
        "email": "peggywolfe@quantasis.com",
        "about": "Proident irure nostrud magna eiusmod mollit esse aliquip qui Lorem. Et anim est ad ullamco. Ea sit dolor anim consectetur.\r\n"
    },
    {
        "_id": "630611d77ce46919ed80b4f6",
        "index": 3,
        "guid": "0e676555-863a-4485-a797-a1c7f7df5624",
        "isActive": true,
        "name": "Potts Hudson",
        "email": "pottshudson@quantasis.com",
        "about": "Irure mollit qui ad aute esse. Eiusmod pariatur consequat commodo id id consequat ullamco proident consectetur pariatur reprehenderit Lorem pariatur ullamco. Excepteur consectetur mollit incididunt consectetur eiusmod esse. Veniam commodo labore cupidatat officia mollit reprehenderit culpa laborum sint ut eu velit ut. Aliqua cupidatat aliquip ea Lorem voluptate sunt elit exercitation consequat aliqua velit ex sint dolor.\r\n"
    },
    {
        "_id": "630611d7a77211a412682f28",
        "index": 4,
        "guid": "06d088be-a9d1-4df6-802a-1446f7b82cca",
        "isActive": true,
        "name": "Wilkerson Byers",
        "email": "wilkersonbyers@quantasis.com",
        "about": "Mollit minim ut laborum enim in deserunt ullamco sint magna. Nostrud consequat voluptate exercitation enim ipsum aute ullamco. Tempor velit est et est ut magna sint sint officia esse.\r\n"
    },
    {
        "_id": "630611d78aa4d040a86af531",
        "index": 5,
        "guid": "41081fc1-498c-4487-96b2-d83fb7033a39",
        "isActive": true,
        "name": "Walton Bernard",
        "email": "waltonbernard@quantasis.com",
        "about": "Sunt ullamco sit qui aliqua velit. Dolore aliquip sit ad ullamco adipisicing et. Enim exercitation exercitation ea esse in incididunt pariatur. Elit non ipsum aliqua sint sint duis id amet aliqua Lorem. Magna velit nostrud labore ipsum do duis consequat proident velit culpa ipsum laborum. Mollit occaecat est pariatur incididunt aliqua voluptate esse exercitation. Laboris sit nisi culpa anim velit irure minim quis nisi ad.\r\n"
    },
    {
        "_id": "630611d75a18fded39d64662",
        "index": 6,
        "guid": "96d5a058-493c-46b9-9f24-b3d96559b06c",
        "isActive": false,
        "name": "Anderson Brennan",
        "email": "andersonbrennan@quantasis.com",
        "about": "Eu tempor ex nisi ad qui deserunt. Esse cillum qui amet adipisicing ad in officia occaecat anim labore sunt. Sint irure non laboris qui duis commodo commodo elit et dolore. Do nostrud enim adipisicing velit enim consectetur duis Lorem aliquip qui reprehenderit.\r\n"
    },
    {
        "_id": "630611d7556ef8fcdc0bc16b",
        "index": 7,
        "guid": "6981fb6b-8494-41a9-a909-a7c0b7034def",
        "isActive": false,
        "name": "Renee Case",
        "email": "reneecase@quantasis.com",
        "about": "Ea cupidatat nulla magna reprehenderit sint exercitation incididunt ullamco amet voluptate. Laborum sunt consequat minim Lorem et ex dolor excepteur. Ut occaecat eiusmod laboris magna. Ad occaecat reprehenderit et sunt qui culpa elit in cillum veniam officia cillum sunt culpa. Ad sint id eu velit irure aliquip.\r\n"
    }
]