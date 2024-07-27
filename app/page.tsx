import Navbar from '@/components/organisms/navbar';

export default async function Index() {
  return (
    <>
      <header className="min-h-24">
        <Navbar />
      </header>
      <main>
        <div className="container mx-auto h-[6000px]">Test Main</div>
      </main>
    </>
  );
}
