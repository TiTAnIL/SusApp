import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from "../services/mail.service.js"

export class MailIndex extends React.Component {

    state = {
        mails: [],
        filterBy: null
    }


    componentDidMount() {
        console.log(this.state)
        console.log('App Mounted')
        this.loadMails()
    }


    loadMails = () => {
        console.log('Loading mails')
        mailService.query(this.state)
            .then((mails) => this.setState({ mails }))
    }


    render() {
        const { mails } = this.state
        return (
            <main className="main-container">
                <MailList mails={mails} />
            </main>
        )
    }
}
