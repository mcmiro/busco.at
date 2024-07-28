import { Navigation } from '@/components/organisms/navigation';

export default async function Index() {
  return (
    <>
      <header className="min-h-24">
        <Navigation />
      </header>
      <main>
        <div className="container mx-auto min-h-screen">Test Main</div>
      </main>
    </>
  );
}
