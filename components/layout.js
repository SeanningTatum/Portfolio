import Header from './header';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen px-6 sm:px-8 xl:px-0 pb-20">

      <div className="mt-4">
        <Header />
      </div>

      <main className="container mt-16 md:mt-24 lg:mt-48 min-w-full">
        {children}
      </main>

    </div>
  );
}
