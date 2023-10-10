import { GlobalStyle } from './GlobalStyle';
import { Container } from './App.styled';
import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';

const RegisterPage = lazy(() => import('../pages/Register'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const LoginPage = lazy(() => import('../pages/Login'));
const HomePage = lazy(() => import('../pages/Home'));

export function App() {
  return (
    <Container>
      <Toaster />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </Container>
  );
}
