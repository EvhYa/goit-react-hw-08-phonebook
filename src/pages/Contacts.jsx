import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
import { getIsLoading } from 'redux/selector';

export default function Contacts () {
  const loading = useSelector(getIsLoading);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <PropagateLoader color="purple" loading={loading} />
      {!loading && <ContactList />}
    </>
  );
};
