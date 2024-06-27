import { UI } from '@/components/index';
import './globals.css';
import Providers from './providers';
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({ subsets: ['latin'], display: 'swap' });

const defaultUrl = process.env.URL
  ? `https://${process.env.URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Busco',
  description: 'Busco brings you everywhere!',
  canonical: new URL(defaultUrl),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={urbanist.className}>
        <Providers>
          <UI.Header />
          <main className={`py-16 px-0`}>{children}</main>
          <UI.Footer />
        </Providers>
      </body>
    </html>
  );
}