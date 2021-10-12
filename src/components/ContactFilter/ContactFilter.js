import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selector';
import * as contactsActions from '../../redux/contacts/contacts-actions';

import styles from './ContactFilter.module.css';

export default function ContactFilter ()  {
    const value = useSelector(getFilter)
    const dispatch = useDispatch()
    const onChangeFilter = e => dispatch(contactsActions.filterContact(e.target.value))
    return (
        <div className={styles.Filter}>
            <label>
                 Find contacts by name
                <input
                    type="text"
                    value={value}
                    onChange={onChangeFilter}></input>
            </label>
        </div>
    )
}
