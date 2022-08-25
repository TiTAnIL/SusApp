import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from "../services/mail.service.js"
import { MailDetails } from "./mail-details.jsx"

export class MailIndex extends React.Component {

    state = {
        mails: [],
        filterBy: null,
        selectedMail: null
    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {
        console.log('Loading mails')
        mailService.query(this.state)
            .then((mails) => this.setState({ mails }))
    }

    render() {
        const { mails} = this.state
        return (
            <main className="main-container">
                {
                    <div>
                        {<MailList mails={mails} onRemoveMail={this.onRemoveMail} onSelectMail={this.onSelectMail} />}
                    </div>
                }
            </main>
        )
    }
}
