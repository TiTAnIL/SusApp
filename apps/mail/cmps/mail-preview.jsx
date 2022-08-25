const { Link } = ReactRouterDOM

export function MailPreview({ mail }) {


    return <tr key={`container${mail.id}`} className="mail-body">
        <td>
            <div key={`check-btn${mail.id}`} className="Check-btn" type="checkbox">check</div>
        </td>
        <td key={`star-btn${mail.id}`} className="star-btn">Star</td>
        <Link to={"/mail/" + mail.id}>
            <td className="author-container">
                <span key={`author${mail.id}`} className="mail-author">{mail.author}</span>
            </td>
            <td className="mail-container" >
                <div className="msg-container">
                    <span key={`title${mail.id}`} className="mail-title">{mail.title} - </span>
                    <span key={`content${mail.id}`} className="mail-content">{mail.content}</span>
                </div>
            </td>
        </Link>
        <td key={`archive-btn${mail.id}`} className="archive-btn">archive</td>
        <td key={`del-btn${mail.id}`} className="delete-btn" onClick={() => onRemoveMail(mail.id)}>X</td>
        <td key={`mark-btn${mail.id}`} className="mark-btn">mark</td>
    </tr>
}