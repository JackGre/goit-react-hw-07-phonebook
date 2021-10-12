import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as contactsActions from './contacts-actions';

const BASE_URL = 'http://localhost:3005';

function addContact(contact) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
    };

    return fetch(`${BASE_URL}/contacts`, options).then(res => res.json());
};

function removeContact(contactId) {
    const options = {
        method: 'DELETE',
    };
    return fetch(`${BASE_URL}/contacts/${contactId}`, options).then(res => res.json());
};

const contacts = createReducer([], {
    [contactsActions.fetchContactSuccess]: (_, action) => action.payload,
    [contactsActions.addContact]: (state, {payload}) => {
        const nameContact = state.map(e => e.name.toLowerCase());
        if (nameContact.includes(payload.name.toLowerCase())) {
            alert(`${payload.name} is alredy in contacts`);
            return state;
        }
        addContact(payload);
        return[...state, payload]
    },
    [contactsActions.deleteContact]: (state, { payload }) => {
        removeContact(payload);
        return state.filter(({ id }) => id !== payload);
    },
});

const isLoading = createReducer(false, {
    [contactsActions.fetchContactRequest]: () => true,
    [contactsActions.fetchContactSuccess]: () => false,
    [contactsActions.fetchContactError]: () => false,
        
});

const error = createReducer(null, {
    [contactsActions.fetchContactError]: (_, action) => action.payload,
    [contactsActions.fetchContactRequest]: () => null,
});

const filter = createReducer('', {
    [contactsActions.filterContact]: (_, action) => action.payload
});


export default combineReducers({
    contacts,
    isLoading,
    error,
    filter,
})