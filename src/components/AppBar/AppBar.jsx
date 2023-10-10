import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './AppBar.styled';
import { Auth } from 'components/Auth/Auth';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  return (
    <Header>
      <Navigation />
      <Auth />
      <UserMenu />
    </Header>
  );
};
