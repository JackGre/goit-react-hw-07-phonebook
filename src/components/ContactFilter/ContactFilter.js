import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactFilter.module.css';
import contactsActions from '../../redux/contacts/contacts-actions';


export default function ContactFilter ()  {
    const value = useSelector(state => state.contacts.filter)
    const dispatch = useDispatch()
    
    return (
        <div className={styles.Filter}>
            <label>
                 Find contacts by name
                <input
                    type="text"
                    value={value}
                    onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}></input>
            </label>
        </div>
    )
}
