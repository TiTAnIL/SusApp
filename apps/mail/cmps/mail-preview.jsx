export function MailPreview({ mail }) {


    return <article className="mail-container">
        <button className="Check-btn">Check</button>
        <button className="star-btn">Star</button>
        <div className="mail-title">{mail.title}</div>
        <div className="mail-content">{mail.about}</div>
        <button className="archive">archive</button>
        <button className="delete-btn">delete</button>
        <button className="mark-btn">mark</button>
    </article>

}