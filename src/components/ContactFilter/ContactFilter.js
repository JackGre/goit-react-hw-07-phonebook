import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getFilter}  from '../../redux/contacts-selector';
import {filterContacts} from '../../redux/contacts-actions';

import styles from './ContactFilter.module.css';

export default function ContactFilter ()  {
    const filter = useSelector(getFilter);    
    const dispatch = useDispatch();
    const onChangeFilter = e => dispatch(filterContacts(e.currentTarget.value))
    return (
        <div className={styles.Filter}>
            <label>
                 Find contacts by name
                <input
                    type="text"
                    name="filter"
                    value={filter}
                    onChange={onChangeFilter}
                    />
            </label>
        </div>
    )
}
