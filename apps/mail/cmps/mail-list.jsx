import { MailPreview } from "./mail-preview.jsx"


export function MailList({ mails, onRemoveMail }) {

    return <table>
    <tbody className="mails-app">
        {mails.map(mail => <MailPreview key={`mail-app${mail.id}`} mail={mail} onRemoveMail={onRemoveMail} />)}
    </tbody>
    </table>
}