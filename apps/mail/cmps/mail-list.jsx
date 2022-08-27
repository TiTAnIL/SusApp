import { MailPreview } from "./mail-preview.jsx"
import { SideBar } from "../cmps/side-bar.jsx"
import { Compose } from "./compose.jsx"

export function MailList({ mails, onRemoveMail, onStar }) {

    return <div>
        <div className="compose-container">
            <span className="compose-icon">
            </span>
            <span className="compose-text">
                <Compose />
            </span>
        </div>
        <SideBar />
        <table className="flex">
            <tbody className="mails-app">
                {mails.map(mail => <MailPreview key={`mail-app${mail.id}`} mail={mail} onRemoveMail={onRemoveMail} onStar={onStar} />)}
            </tbody>
        </table>
    </div>
}