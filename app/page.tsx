import { Navigation } from '@/components/organisms/navigation';

export default async function Index() {
  return (
    <>
      <header className="min-h-24">
        <Navigation />
      </header>
      <main>
        <div className="container mx-auto h-[6000px]">Test Main</div>
      </main>
    </>
  );
}
