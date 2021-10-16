import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../../redux/contacts-actions';
import {  getFilterContacts } from '../../redux/contacts-selector';


const ContactItem = () => {
    const contacts = useSelector(getFilterContacts);
     const dispatch = useDispatch();
    const onClick = id => dispatch(contactsActions.deleteContact(id));
    
    return (
        
                contacts.map(({ name, number, id }) => (
                    <li key={id}>
                        <p>
                            {name}: <span>{number}</span>
                        </p>
                        <button type="button" onClick={() => onClick(id)}>Delete</button>
                    </li>
                ))
        
    )
};


export default ContactItem;