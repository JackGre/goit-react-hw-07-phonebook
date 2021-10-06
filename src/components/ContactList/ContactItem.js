import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactItem.module.css';
import contactsActions from '../../redux/contacts/contacts-actions';

const getVisibleContacts = (allContacts, filter) => {
   
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter))
};

const ContactItem = () => {
    const contacts = useSelector(state =>
        getVisibleContacts(state.contacts.items, state.contacts.filter));
    
    const dispatch = useDispatch();

    const onClick = id => dispatch(contactsActions.removeContact(id));

    return (
        contacts.map(({ name, number, id }) => {
            return (
            <li className={styles.ContactItem} key={id}>
                <p>
                    <span>{name}</span>
                    <span>{number}</span>
                </p>
                    <button onClick={() => { onClick(id) }}>Delete</button>
            </li>
        )})

    )
}


export default ContactItem;