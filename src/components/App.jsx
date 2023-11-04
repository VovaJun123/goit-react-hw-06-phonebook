import { useSelector } from 'react-redux';

import { MyForm } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const users = useSelector(state => state.contacts.items);

  return (
    <section>
      <div>
        <h1>Phonebook</h1>
        <MyForm />
      </div>
      <div>
        <h2>Contacts</h2>
        {!users.length ? (
          <h3>Your phonebook is empty. Add your first contact</h3>
        ) : (
          <>
            <h3>Your phonebook has {users.length} contacts</h3>
            <Filter />
            <ContactList />
          </>
        )}
      </div>
    </section>
  );
};