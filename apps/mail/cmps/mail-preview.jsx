export function MailPreview({ mail, onRemoveMail }) {


    return <article key={`container${mail.id}`} className="mail-container">
        <button key={`check-btn${mail.id}`} className="Check-btn">Check</button>
        <button key={`star-btn${mail.id}`} className="star-btn">Star</button>
        <div key={`title${mail.id}`} className="mail-title">{mail.title}</div>
        <div key={`content${mail.id}`} className="mail-content">{mail.about}</div>
        <button key={`archive-btn${mail.id}`} className="archive-btn">archive</button>
        <button key={`del-btn${mail.id}`} className="delete-btn" onClick={()=>onRemoveMail(mail.id)}>X</button>
        <button key={`mark-btn${mail.id}`} className="mark-btn">mark</button>
    </article>

}