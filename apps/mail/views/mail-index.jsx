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

    onRemoveMail = (mailId) => {
        mailService.remove(mailId)
            .then(() => {
                console.log('Removed!')
                const mails = this.state.mails.filter(mail => mail.id !== mailId)
                this.setState({ mails, isBounce: true })
                showSuccessMsg('Mail removed')
                setTimeout(() => {
                    this.setState({ isBounce: false })
                }, 500)

            })
            .catch(err => {
                console.log('Problem!!', err)
                showErrorMsg('Cannot remove mail')
            })
    }


    render() {
        const { mails } = this.state
        const { onRemoveMail } = this
        return (
            <main className="main-container">
                <MailList mails={mails} onRemoveMail={onRemoveMail} />
            </main>
        )
    }
}
