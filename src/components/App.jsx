


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MyForm } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { addContact, deleteContact } from '../redux/contactSlice';
import { v4 as uuidv4 } from 'uuid';

export const App = () => {
  const users = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const onSubmitForm = ({ name, number }) => {
   
    const isUnique = !users.some((contact) => contact.name === name);

    if (!isUnique) {
      alert(`${name} is already in contacts`);
      return;
    }

    
    dispatch(addContact({ id: uuidv4(), name, number }));
  };

  const onDeleteContactClick = (id) => {
    dispatch(deleteContact(id));
  };

  

  return (
    <section>
      <div>
        <h1>Phonebook</h1>
        <MyForm onSubmitForm={onSubmitForm} />
      </div>
      <div>
        <h2>Contacts</h2>
        {!users.length ? (
          <h3>Your phonebook is empty. Add your first contact</h3>
        ) : (
          <>
            <h3>Your phonebook has {users.length} contacts</h3>
            <Filter />
            <ContactList onDeleteContactClick={onDeleteContactClick} />
          </>
        )}
      </div>
    </section>
  );
};