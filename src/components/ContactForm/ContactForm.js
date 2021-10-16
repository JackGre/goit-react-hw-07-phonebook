import React, { useState } from 'react';
import { connect } from 'react-redux';
import {addContact} from '../../redux/contacts-actions';

import styles from './ContactForm.module.css';



const ContactForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    
   
    const handleInputChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number' :
                setNumber(value);
                break;
            default: return;
            
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name: name, number: number });
        
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
                onChange={handleInputChange}
            />
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                value={number}
                onChange={handleInputChange}
            />
            <button type="submit"
            >Add contact</button>
               
        </form>
    );

};

const mapDispatchToProps = dispatch => ({
    onSubmit: ({ name, number }) => dispatch(addContact({ name, number })),
});

export default connect(null, mapDispatchToProps)(ContactForm);



    

