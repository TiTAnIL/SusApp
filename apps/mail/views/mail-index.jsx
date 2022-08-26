import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from "../services/mail.service.js"

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

    onRemoveMail = (mailId) => {
        mailService.remove(mailId)
            .then(() => {
                console.log('mail removed')
                const mails = this.state.mails.filter(mail => mail.id !== mailId)
                this.setState({ mails, selectedMail: null })
                // showSuccessMsg('mail Removed')
            })
            .catch(err => {
                console.log('Problem!!', err)
            })
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
