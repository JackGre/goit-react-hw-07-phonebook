import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import styles from './ContactForm.module.css';



export default function ContactForm () {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items)
    
    const onChangeName = (event) => {
        setName(event.target.value)
    };

    const onChangeNumber = (event) => {
        setNumber(event.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();              

        const check = contacts.find(el => el.name === name)
          
        if (check) {
            alert(`${check.name} is already in contacts`)
            return;
        };

        dispatch(contactsActions.addContact(name, number));
        resetForm();
    };
    const resetForm = () => {
        setName('');
        setNumber('');
    };

           return (
            <form className={styles.Form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value={name}
                    onChange={onChangeName}
                />
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={number}
                    onChange={onChangeNumber}
                />
                <button type="submit"
                >Add contact</button>
               
            </form>
        );

}



    

