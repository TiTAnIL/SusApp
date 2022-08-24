import { mailService } from "../services/mail.service.jsx"

export class MailIndex extends React.Component {

    state = {
        mails: [],
        filterBy: null
    }


    componentDidMount() {
        console.log('App Mounted') 
        this.loadMails()
     }


     loadMails = () => {
        console.log('Loading mails')
        mailService.query(this.state)
        .then((books) => this.setState({ books }))
        console.log('from load', this.state)
        
     }


    render() {
        return (

            <div>mail app</div>
        )
    }
}
