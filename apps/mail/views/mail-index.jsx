import { eventBusService } from "../../../services/event-bus.service.js"
import { Compose } from "../cmps/compose.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from "../services/mail.service.js"

export class MailIndex extends React.Component {

    state = {
        mails: [],
        selectedMail: null,
        // showModal: false
    }

    componentDidMount() {
        this.loadMails()
        // this.unsubscribe = eventBusService.on('show-new-mail-modal', () =>
        // console.log('emmm? it!')
        // )
    }

    // componentWillUnmount() { this.unsubscribe() }

    loadMails = () => {
        mailService.query(this.state)
            .then((mails) => this.setState({ mails }))
    }

    onRemoveMail = (mailId) => {
        mailService.remove(mailId)
            .then(() => {
                const mails = this.state.mails.filter(mail => mail.id !== mailId)
                this.setState({ mails, selectedMail: null })
                // showSuccessMsg('mail Removed')
            })
            .catch(err => {
                console.log('Problem!!', err)
            })
    }

    onStar = (mailId) => {
        console.log(mailId)
        console.log(this.state.mails)
        const mail = this.state.mails.filter(mail => mail.id === mailId)
        console.log(mail)
    }


    render() {
        const { mails } = this.state
        return (
            <main className="main-container">
                {
                    <div>
                        <MailList mails={mails} onRemoveMail={this.onRemoveMail}
                            onSelectMail={this.onSelectMail} onStar={this.onStar} />
                    </div>
                }
            </main>


        )
    }
}
