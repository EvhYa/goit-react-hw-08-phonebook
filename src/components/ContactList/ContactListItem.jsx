import { useDispatch } from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';
import { deleteContact } from 'redux/contacts/operations';
import { useState } from 'react';
import { EditContactForm } from 'components/EditContactForm/EditContactForm';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const ContactListItem = ({ id, name, number }) => {
  const [removing, setRemoving] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const dispatch = useDispatch();

  return (
    <li>
      <Card sx={{ width: 1, border: 1 }}>
        {!editShow && (
          <CardContent>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="h6" component="div">
              tel: {number}
            </Typography>
          </CardContent>
        )}
        {editShow && (
          <CardContent>
            <EditContactForm
              id={id}
              name={name}
              number={number}
              editShow={editShow}
              setEditShow={setEditShow}
            />
          </CardContent>
        )}
        <CardActions>
          <Button
            onClick={() => {
              setEditShow(!editShow);
            }}
          >
            {editShow ? 'Cancel' : 'Edit'}
          </Button>
          <Button
            type="button"
            onClick={() => {
              setRemoving(true);
              dispatch(deleteContact(id));
            }}
          >
            {removing ? <BeatLoader color="purple" size={10} /> : 'Delete'}
          </Button>
        </CardActions>
      </Card>
    </li>
  );
};
