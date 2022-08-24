import { MailPreview } from "./mail-preview.jsx"


export function MailList({ mails }) {

    return <section className="mails-app">
        {mails.map(mail => <MailPreview key={mail.id} mail={mail} />)}
    </section>
}