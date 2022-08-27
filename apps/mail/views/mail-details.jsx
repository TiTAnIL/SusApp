import { Compose } from "../cmps/compose.jsx"
import { SideBar } from "../cmps/side-bar.jsx"
import { mailService } from "../services/mail.service.js"

// const { Link } = ReactRouterDOM

export class MailDetails extends React.Component {

    state = {
        mail: null,
    }

    componentDidMount() {
        this.loadMail()
    }

    loadMail = () => {
        const { mailId } = this.props.match.params
        mailService.getMailById(mailId)
            .then((mail) => this.setState({ mail }))
    }

    render() {
        const { mail } = this.state
        if (!mail) return <div>Loading...</div>
        return <section className="mail-details">
            <Compose />
            <SideBar />
            <div className="mail-container">
                <div className="title"></div>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <div className="mail-heading">
                                    <h2 className="h2-mail-heading">{mail.title}</h2>
                                </div>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="sender-container">
                                <span className="sender-email">{mail.email} </span>
                                <span className="sender-namer">{mail.author} </span>
                                <span className="sent-time">00:00:00</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="mail-details-content">
                                <span>
                                    <p className="mail-peragraph">{mail.content}</p>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="content"></div>
            </div>
        </section>
    }
}