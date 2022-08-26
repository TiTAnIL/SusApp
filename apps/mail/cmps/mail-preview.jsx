const { Link } = ReactRouterDOM

export function MailPreview({ mail, onRemoveMail }) {


    return <tr key={`container${mail.id}`} className="mail-body">
        <td>
            <span key={`check-btn${mail.id}`} className="Check-container mail-btn-size" type="checkbox">
                <input type="checkbox" id="vehicle1" />
            </span>
        </td>
        <td key={`star-btn${mail.id}`} className="star-container btn">
            <span className="btn-star"><img className="star-img mail-btn-size" src="assets/img/star.png" /></span>
        </td>
        <td className="author-container">
            <Link to={"/mail/" + mail.id}>
                <span key={`author${mail.id}`} className="mail-author">{mail.author}</span>
            </Link>
        </td>
        <td className="msg-container" >
            <Link to={"/mail/" + mail.id}>
                <span className="msg-container">
                    <span key={`title${mail.id}`} className="mail-title">{mail.title} - </span>
                    <span key={`content${mail.id}`} className="mail-content">{mail.content}</span>
                </span>
            </Link>
        </td>
        <td key={`archive-btn${mail.id}`} className="archive-container btn">
            <span className="btn-archive"><img className="archive-img mail-btn-size" src="assets/img/archive.png" /></span>
        </td>
        <td key={`del-btn${mail.id}`} className="delete-container btn" onClick={() => onRemoveMail(mail.id)}>
            <span className="btn-bin"><img className="bin-img mail-btn-size" src="assets/img/bin.png" /></span>
        </td>
        <td key={`mark-btn${mail.id}`} className="mark-container btn">
            <span className="btn-envelope"><img className="envelope-img mail-btn-size" src="assets/img/envelope.png" /></span>
        </td>
    </tr>
}