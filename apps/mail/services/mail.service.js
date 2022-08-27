import { storageService } from "../../../services/storage.service.js"
import { utilService } from "../../../services/util.service.js"

const KEY = 'mailsDB'

export const mailService = {
    query,
    save,
    remove,
    getMailById
}

function getMails() {
    return gMails
}

function getMailById(mailId) {
    if (!mailId) return Promise.resolve(null)
    const mails = _loadFromStorage()
    const mail = mails.find(mail => mailId === mail.id)
    return Promise.resolve(mail)
}

function query() {
    let mails = _loadFromStorage()
    if (!mails || !mails.length) {
        mails = getMails()
        _saveToStorage(mails)
    }
    return Promise.resolve(mails)
}

function save(mail) {
    if (mail.id) return _update(mail)
    else return _add(mail)
}

function _add({ author, email, title }) {
    let mails = loadFromStorage()
    const mail = _createMail()
    mails = [mail, ...mails]
    _saveToStorage(mails)
    Promise.resolve(mail)
}

function _createMail(author, email, title) {
    return {
        id: utilService.makeId(),
        author,
        email,
        title,
        content: '',
        date: null,
        isChecked: false,
        isStarred: false,
        isRead: false,
        isArchived: false,
        isDeleted: false
    }
}

function _update(mailToUpdate) {
    let mails = _loadFromStorage()
    mails = mails.map(mail => mail.id === mailToUpdate.id ? mailToUpdate : mail)
    _saveToStorage(mails)
    return Promise.resolve(mailToUpdate)
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
    return storageService.loadFromStorage(KEY)
}


const gMails = [
    {
        "id": "63088551a3f1d6a8a2060832",
        "author": "Arlene Rogers",
        "email": "arlenerogers@neocent.com",
        "title": "laborum nisi aliquip aute",
        "content": "Ut nisi veniam fugiat ea nisi occaecat et adipisicing nostrud ipsum consectetur deserunt. Do cillum exercitation do officia amet eu in commodo pariatur dolor id dolore do. In sint non ipsum dolore ex officia anim minim ex dolor exercitation do anim. Veniam elit ex elit esse pariatur officia. Deserunt tempor nisi nisi laborum labore ad exercitation voluptate et cillum id in ad. Exercitation velit adipisicing quis labore consequat et esse culpa. Commodo non eiusmod dolor fugiat officia consectetur eu ea nulla ipsum esse.\r\nSunt laboris cillum qui minim ex nostrud id do enim nostrud elit occaecat. Veniam mollit esse amet consequat enim exercitation pariatur. Ad in cillum deserunt consectetur ad sunt incididunt id cillum excepteur enim eu. Mollit magna non labore aute minim voluptate id officia. Anim adipisicing magna mollit ipsum incididunt excepteur consequat id officia velit aliqua incididunt laborum do. Deserunt officia do in irure dolore velit cillum minim amet eiusmod. Dolor ad culpa occaecat excepteur elit pariatur tempor irure commodo veniam incididunt.\r\n",
        "date": "Tue Jun 23 2020 12:07:26 GMT+0300 (Israel Daylight Time)",
        "isChecked": true,
        "isStarred": false,
        "isRead": false,
        "isArchived": true,
        "isDeleted": true
    },
    {
        "id": "63088551ff5180ab79f2d175",
        "author": "Kirby Norris",
        "email": "kirbynorris@neocent.com",
        "title": "amet aliqua consectetur enim",
        "content": "Enim aute aute excepteur mollit pariatur ex exercitation exercitation esse. Excepteur ex qui duis pariatur nulla. Pariatur deserunt sunt tempor laboris ut sint qui officia culpa minim.\r\nNon sit veniam ea minim ullamco cillum magna Lorem excepteur. Non dolor et et mollit anim duis cupidatat laborum occaecat cillum et labore. Ad laboris sunt et nostrud fugiat sint dolore irure veniam occaecat. Cillum et dolor sint dolor sunt in nostrud qui. Cupidatat Lorem excepteur et consequat eiusmod. Esse enim velit proident ad veniam ipsum deserunt cillum nisi magna commodo.\r\n",
        "date": "Sun Jul 16 2000 09:34:58 GMT+0300 (Israel Daylight Time)",
        "isChecked": true,
        "isStarred": false,
        "isRead": true,
        "isArchived": false,
        "isDeleted": false
    },
    {
        "id": "63088551b83e4e940511cd4b",
        "author": "Leona Mckenzie",
        "email": "leonamckenzie@neocent.com",
        "title": "incididunt deserunt aliquip exercitation",
        "content": "Consequat pariatur occaecat duis sunt ullamco dolore labore cupidatat Lorem mollit tempor sint ex. Exercitation mollit amet amet exercitation id amet laborum nostrud. Ullamco excepteur enim ea dolore laborum fugiat consequat ea laborum ullamco ea qui veniam adipisicing. Incididunt sunt eiusmod quis culpa mollit ex consectetur voluptate occaecat Lorem incididunt est. Dolore sunt veniam veniam aliqua velit id et amet. Quis minim in duis nisi ipsum deserunt aliquip ipsum laborum deserunt aliqua irure.\r\nAmet dolor magna laboris id Lorem fugiat consequat nulla consectetur. Nulla dolor sit occaecat elit magna. Dolor mollit cupidatat ea in mollit aliqua sit ullamco. Quis anim esse voluptate tempor laborum voluptate. Lorem qui officia culpa minim magna ullamco enim nostrud est tempor consectetur consequat. Minim ullamco ex mollit duis ipsum nisi proident elit nostrud Lorem. Officia ex laborum laborum in commodo sint occaecat fugiat magna pariatur adipisicing dolor laboris ea.\r\n",
        "date": "Thu Mar 10 2016 13:50:49 GMT+0200 (Israel Standard Time)",
        "isChecked": false,
        "isStarred": false,
        "isRead": true,
        "isArchived": true,
        "isDeleted": true
    },
    {
        "id": "63088551d24ded33b4ffbc6e",
        "author": "Garner Welch",
        "email": "garnerwelch@neocent.com",
        "title": "veniam consectetur culpa nisi",
        "content": "Aliquip ex aute pariatur ea aliquip proident dolor cillum est nostrud. Nisi consectetur proident tempor irure est culpa cupidatat labore. Ex eiusmod minim sit mollit amet eiusmod consectetur.\r\nEnim est laborum enim id duis velit aliquip nulla. Magna consectetur eu ut culpa cupidatat pariatur esse proident. Incididunt velit fugiat velit excepteur in culpa sit ea irure irure exercitation ea do ullamco. Reprehenderit reprehenderit deserunt dolor nisi dolor eu. Sunt dolor labore eu eiusmod sint sit Lorem. Ad dolore nostrud ipsum in sint adipisicing mollit fugiat ea. Eiusmod esse sint laboris aliqua reprehenderit exercitation non.\r\n",
        "date": "Thu Oct 08 2020 03:34:32 GMT+0300 (Israel Daylight Time)",
        "isChecked": false,
        "isStarred": true,
        "isRead": true,
        "isArchived": false,
        "isDeleted": false
    },
    {
        "id": "63088551c9b4e115bc95d46e",
        "author": "Iva Preston",
        "email": "ivapreston@neocent.com",
        "title": "velit esse non esse",
        "content": "Qui nisi cupidatat consectetur sunt non non ullamco tempor Lorem. Nisi dolor incididunt id sint excepteur reprehenderit irure pariatur consectetur occaecat tempor esse. Minim adipisicing est deserunt tempor excepteur proident laboris ea aliqua. Occaecat anim sit voluptate velit ullamco consectetur ea consequat labore reprehenderit. Pariatur dolor in ex sint esse labore dolore. Ex fugiat deserunt labore voluptate ipsum. Mollit in magna dolor pariatur veniam irure elit ipsum.\r\nNulla eiusmod enim aliquip sint nulla aliquip reprehenderit aute cupidatat sit anim mollit quis est. Nisi consequat ad Lorem ipsum quis velit. Lorem dolore reprehenderit consectetur laboris eiusmod nulla dolore. Magna excepteur ipsum qui veniam id laborum. Cupidatat ad et non in magna officia nulla magna officia laborum reprehenderit. Consectetur est adipisicing non cillum nisi incididunt ipsum ex veniam ex. Esse ut do labore ea magna fugiat incididunt duis in eu in sunt excepteur.\r\n",
        "date": "Wed Feb 22 1989 23:19:23 GMT+0200 (Israel Standard Time)",
        "isChecked": false,
        "isStarred": false,
        "isRead": false,
        "isArchived": true,
        "isDeleted": false
    },
    {
        "id": "63088551d962fff6a073f87a",
        "author": "Diann Guzman",
        "email": "diannguzman@neocent.com",
        "title": "est ut duis ad",
        "content": "Magna do mollit ex excepteur sunt eu consectetur dolore non. Reprehenderit sunt quis esse culpa occaecat mollit tempor excepteur nisi nulla. Magna deserunt minim laborum culpa consequat qui ex.\r\nExercitation Lorem laboris ad do ad sint Lorem nisi nostrud voluptate tempor do nostrud magna. Qui dolor aliquip velit laboris sint sint elit aute voluptate cillum mollit. Nostrud aliquip id aute cupidatat anim anim aliqua culpa consectetur laboris nulla tempor nisi.\r\n",
        "date": "Sun Dec 25 1988 19:28:15 GMT+0200 (Israel Standard Time)",
        "isChecked": false,
        "isStarred": false,
        "isRead": true,
        "isArchived": true,
        "isDeleted": true
    },
    {
        "id": "630885512900148d3d6a049e",
        "author": "Susanna Daniels",
        "email": "susannadaniels@neocent.com",
        "title": "adipisicing cillum aute velit",
        "content": "Qui aliqua anim officia aute Lorem dolore aliqua ea ea. Culpa commodo consectetur tempor quis duis. Ea tempor minim ipsum laboris amet tempor reprehenderit in pariatur laboris aute amet do aliquip. Commodo non cillum enim enim amet laborum do adipisicing sint cillum quis adipisicing duis. In aliquip elit id qui est adipisicing culpa velit duis nulla sint cillum ex.\r\nAliqua fugiat incididunt Lorem duis nisi cillum excepteur reprehenderit laboris ipsum laboris exercitation velit occaecat. Veniam amet labore anim velit aliqua eiusmod deserunt ullamco nulla aliqua do nulla ex non. Pariatur aute sint et est sunt laborum id quis est aliqua nisi eu. Ullamco nulla occaecat veniam laboris occaecat ullamco officia sunt ut exercitation ipsum et.\r\n",
        "date": "Mon Nov 07 2011 19:13:49 GMT+0200 (Israel Standard Time)",
        "isChecked": false,
        "isStarred": true,
        "isRead": true,
        "isArchived": true,
        "isDeleted": true
    },
    {
        "id": "630885515bf58e72a20a236b",
        "author": "Hubbard Ortiz",
        "email": "hubbardortiz@neocent.com",
        "title": "minim non deserunt enim",
        "content": "Ut ex adipisicing fugiat esse. Mollit consequat amet veniam exercitation fugiat id incididunt ut quis nostrud adipisicing et. Sint exercitation officia sit laboris occaecat officia enim. Id eiusmod adipisicing eiusmod qui dolor.\r\nQui incididunt aute dolor nostrud amet in est dolore esse sunt tempor aliquip id. Occaecat consectetur commodo id tempor irure amet enim nisi et consequat. Fugiat anim adipisicing consectetur commodo ut est Lorem non. Ea nostrud occaecat quis irure est aliqua anim et est. Ut duis veniam irure minim dolore qui esse do qui reprehenderit. Laborum anim non magna sit.\r\n",
        "date": "Fri Mar 23 2012 10:06:11 GMT+0200 (Israel Standard Time)",
        "isChecked": false,
        "isStarred": true,
        "isRead": true,
        "isArchived": false,
        "isDeleted": false
    },
    {
        "id": "63088551d57272f8c6a09d25",
        "author": "Milagros Kline",
        "email": "milagroskline@neocent.com",
        "title": "ad magna ex laborum",
        "content": "Aliqua do incididunt Lorem ex velit est excepteur fugiat fugiat amet minim id. Amet nulla amet amet occaecat pariatur reprehenderit esse ipsum. Duis veniam excepteur sint velit aute adipisicing dolore voluptate proident sint quis. Ipsum sint labore labore laboris cillum sit dolore deserunt eu exercitation sint excepteur.\r\nMinim adipisicing ipsum cillum enim ipsum duis do qui mollit exercitation adipisicing ex anim ipsum. Eiusmod exercitation culpa sunt ex id aliquip Lorem mollit excepteur. Nulla nostrud non qui nulla voluptate aute sunt officia ipsum Lorem labore irure. Id officia nisi deserunt mollit tempor minim aliquip labore qui commodo pariatur. Fugiat dolor pariatur aliquip consequat velit officia irure irure sint. Aliqua dolor et et officia mollit aute pariatur minim cupidatat ex.\r\n",
        "date": "Fri Dec 10 2010 06:20:59 GMT+0200 (Israel Standard Time)",
        "isChecked": false,
        "isStarred": false,
        "isRead": true,
        "isArchived": false,
        "isDeleted": true
    }
]