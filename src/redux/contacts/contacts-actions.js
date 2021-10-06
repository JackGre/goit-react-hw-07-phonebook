import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';


const addContact = createAction('contacts/add', (name, number) => {
    return {
        payload: {
            name,
            number,
            id: shortid.generate(),
        },
    };
});

const removeContact = createAction('contacts/remove');

const changeFilter = createAction('contacts/changeFilter');

const contactsActions = { addContact, removeContact, changeFilter }

export default contactsActions ;