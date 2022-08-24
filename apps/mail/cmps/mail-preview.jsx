export function MailPreview({ mail, onRemoveMail }) {


    return <tr key={`container${mail.id}`} className="mail-body">
        <td key={`check-btn${mail.id}`} className="Check-btn" itemType="checkbox" >Check</td>
        <td key={`star-btn${mail.id}`} className="star-btn">Star</td>
        <td>
            <span key={`title${mail.id}`} className="mail-title">{mail.title}</span>
        </td>
        <td>
            <span key={`content${mail.id}`} className="mail-content">{mail.about}</span>
        </td>
        <td key={`archive-btn${mail.id}`} className="archive-btn">archive</td>
        <td key={`del-btn${mail.id}`} className="delete-btn" onClick={()=>onRemoveMail(mail.id)}>X</td>
        <td key={`mark-btn${mail.id}`} className="mark-btn">mark</td>
    </tr>
}