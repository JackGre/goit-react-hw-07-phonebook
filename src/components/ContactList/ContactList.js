import React from 'react';
import ContactItem from './ContactItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onClick}) => {
    return (
        <ul className={styles.ContactList}>
            <ContactItem contacts={contacts} onClick={onClick}/>
        </ul>
    );
}



export default ContactList;