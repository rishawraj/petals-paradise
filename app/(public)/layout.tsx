import NavBar from '../_components/NavBar';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // <div className="flex min-h-screen flex-col pb-5 sm:flex-row">

  return (
    <>
      <div className="flex flex-col">
        <NavBar />
        {children}
      </div>
    </>
  );
}
