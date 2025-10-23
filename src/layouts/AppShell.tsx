import { ReactNode } from 'react';
import { Header } from '../components/organisms/ui/Header';
import { Footer } from '../components/organisms/ui/Footer';
import { Sidebar } from '../components/organisms/ui/Sidebar';

export const AppShell = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-grow p-4">{children}</main>
      </div>
      <Footer />
    </div>
  );
};
