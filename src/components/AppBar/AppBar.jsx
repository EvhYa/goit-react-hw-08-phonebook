import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './AppBar.styled';
import { Auth } from 'components/Auth/Auth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Header>
      <Navigation />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <UserMenu />}
    </Header>
  );
};
