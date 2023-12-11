import styles from './ContactForm.module.css';
import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import Notiflix from 'notiflix';

export const ContactForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

    const name = useState();
    const number = useState();


    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExist) {
      Notiflix.Report.warning(
        'Alert',
        `Contact with name ${name} already exists!`,
        'Ok'
      );
    return;
    }

    const isNumberExist = contacts.find(
       contact =>
         contact.number.replace(/\D/g, '') === number.replace(/\D/g, '')
     );

     if (isNumberExist) {
       Notiflix.Report.warning(
         'Alert',
         `Number ${number} is already in contacts!`,
         'Ok'
       );
       return;
     }
        const newObj = {
            id: nanoid(),
            name: e.target.elements.name.value,
            number: e.target.elements.number.value,
        };
        dispatch(addContact(newObj));

        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label>
                <input
                    className={styles.inputField}
                    placeholder="Name"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>

            <label>
                <input
                    className={styles.inputField}
                    placeholder="Phone number"
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>

            <button type="submit" className={styles.button}>
                Add Contact
            </button>
        </form>
    );
};