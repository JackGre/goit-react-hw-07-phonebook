import { createSelector } from "@reduxjs/toolkit";


export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;
export const getLoader = state => state.contacts.isLoading;

export const getFilterContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filter) => {
        const normalizeFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizeFilter)
        );
    },
);
