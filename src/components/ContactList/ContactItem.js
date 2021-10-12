import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';
import * as contactsOperations from '../../redux/contacts/contactsOperations';
import { getFilterContacts } from '../../redux/contacts/contacts-selector';

import styles from './ContactItem.module.css';


const ContactItem = () => {
    const contacts = useSelector(getFilterContacts);    
    const dispatch = useDispatch();
    const onClick = id => dispatch(contactsActions.deleteContact(id));
    useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch])

    return (
        
        contacts.map(({ name, number, id }) => {
            return (
                <li className={styles.ContactItem} key={id}>
                    <p>
                        <span>{name}</span>
                        <span>{number}</span>
                    </p>
                    <button
                        type="button"
                        onClick={() => onClick(id)}
                    >Delete</button>
                </li>
            )
        })           

    );
}


export default ContactItem;