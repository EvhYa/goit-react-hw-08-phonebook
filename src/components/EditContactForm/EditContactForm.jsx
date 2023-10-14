import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/operations';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

export const EditContactForm = ({
  id,
  name,
  number,
  editShow,
  setEditShow,
}) => {
  const [editedName, setName] = useState(name);
  const [editedNumber, setNumber] = useState(number);

  const dispatch = useDispatch();

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    let editedContact = {
      id: id,
      name: editedName,
      number: editedNumber,
    };

    dispatch(updateContact(editedContact));
    setName('');
    setNumber('');
    setEditShow(!editShow);
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <TextField
          name="name"
          id="name"
          label="Name"
          variant="standard"
          value={editedName}
          onChange={handleChange}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <TextField
          name="number"
          id="number"
          label="Number"
          variant="standard"
          value={editedNumber}
          onChange={handleChange}
          type="text"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <div style={{marginTop: 10}}>
          <Button startIcon={<SaveIcon />} size="small" variant="outlined">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};
