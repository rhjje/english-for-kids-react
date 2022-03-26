import { ReactNode } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const AppLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
