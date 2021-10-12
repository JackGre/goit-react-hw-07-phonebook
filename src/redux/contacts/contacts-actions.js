import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction('contact/add', ({ name, number }) => {
    return {
        payload: {
            name,
            number,
            id: uuidv4(),
        },
    };
});

export const deleteContact = createAction('contacts/delete');
export const filterContact = createAction('contacts/filter');

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');