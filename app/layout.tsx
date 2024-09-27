import './globals.css';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='w-full'>
        <h1 className='text-center text-4xl w-full'>Recuring Date picker</h1>
        {children}
      </body>
    </html>
  );
}
