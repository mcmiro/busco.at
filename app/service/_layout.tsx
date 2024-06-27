import { UI } from '@/components/index';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UI.Header />
      <main className={`px-0`}>{children}</main>
    </>
  );
}
