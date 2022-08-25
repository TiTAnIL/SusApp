import { MailPreview } from "./mail-preview.jsx"


export function MailList({ mails }) {

    return <table>
    <tbody className="mails-app">
        {mails.map(mail => <MailPreview key={`mail-app${mail.id}`} mail={mail} />)}
    </tbody>
    </table>
}