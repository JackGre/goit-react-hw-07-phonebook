import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactFilter from './components/ContactFilter';
import ContactList from './components/ContactList';
import {fetchContacts} from './redux/contactsOperations';
import {getContacts} from './redux/contacts-selector'

import styles from "./App.module.css";

export default function App() {
      const dispatch = useDispatch()
      useEffect(() => dispatch(fetchContacts()), [dispatch])
      const contacts = useSelector(getContacts)
    console.log(contacts)
    return (
      <div className={styles.Container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactFilter />
        <ContactList />
        
      </div>
    );
    
}


