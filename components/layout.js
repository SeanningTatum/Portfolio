import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen px-6 sm:px-8 xl:px-0 relative">

      <div className="mt-4">
        <Header />
      </div>

      <main className="container mt-16 md:mt-24 lg:mt-48 min-w-full relative">
        {children}
      </main>

      <Footer />

      <div className="bg absolute bottom-0 left-0" />
    </div>
  );
}
