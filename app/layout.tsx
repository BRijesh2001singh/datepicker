import './globals.css';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='w-full'>
        <h1 className='text-center text-4xl w-full mt-6 font-mono font-bold'>Recuring Date picker</h1>
        {children}
      </body>
    </html>
  );
}
