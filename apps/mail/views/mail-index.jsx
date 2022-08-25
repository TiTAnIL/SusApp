import { MailList } from "../cmps/mail-list.jsx"
import { MailPreview } from "../cmps/mail-preview.jsx"
import { mailService } from "../services/mail.service.js"

export class MailIndex extends React.Component {

    state = {
        mails: [],
        filterBy: null
    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {
        console.log('Loading mails')
        mailService.query(this.state)
            .then((mails) => this.setState({ mails }))
    }

    onRemoveMail = (mailId) => {
        console.log('mailId from remove mail', mailId)
        console.log('mails',this.state.mails)
        mailService.remove(mailId)
            .then(() => {
                const mails = this.state.mails.filter(mail => mail.id !== mailId)
                this.setState({ mails, selectedMail: null })
            })
    }


    render() {
        const { mails } = this.state
        const { onRemoveMail } = this.state
        return (
            <main className="main-container">
                <MailList mails={mails} onRemoveMail={this.onRemoveMail} />
                {/* <MailPreview onRemoveMail={this.onRemoveMail} /> */}
            </main>
        )
    }
}
