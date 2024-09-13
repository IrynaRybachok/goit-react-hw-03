import Contact from "../Contact/Contact";
import { nanoid } from 'nanoid'
const ContactList = ({ dataListContact, onDelete }) =>{
    return (
        <ul>
            {dataListContact.map(data =>(
                <li key={nanoid()}>
                    <Contact
                        data={data}
                        onDelete={onDelete}
                    />
                </li>
            ))}
        </ul>
    )
}

export default ContactList;