import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { getUsetName } from 'redux/auth/selectors';

import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { Name } from './UserMenu.styled';

export const UserMenu = () => {
  const name = useSelector(getUsetName);

  const dispatch = useDispatch();

  return (
    <div>
      <Name>Welcome, {name}</Name>
      <Button
        startIcon={<LogoutIcon />}
        variant="outlined"
        onClick={() => {
          dispatch(logout());
        }}
      >Logout</Button>
    </div>
  );
};
