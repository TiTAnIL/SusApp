import { MailPreview } from "./mail-preview.jsx"
import { SideBar } from "../cmps/side-bar.jsx"

export function MailList({ mails, onRemoveMail }) {

    return <div> <SideBar />
    <table className="flex">
    <tbody className="mails-app">
        {mails.map(mail => <MailPreview key={`mail-app${mail.id}`} mail={mail} onRemoveMail={onRemoveMail} />)}
    </tbody>
    </table>
    </div>
}