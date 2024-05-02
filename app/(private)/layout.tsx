import NavBar from '../_components/NavBar';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col">
        <NavBar />
        {children}
      </div>
    </>
  );
}
