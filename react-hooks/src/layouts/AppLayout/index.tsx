import { ReactNode } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';

export const AppLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
