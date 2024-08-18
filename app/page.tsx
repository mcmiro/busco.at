import { UI } from '@/components/index';
import BookingFormIndex from '@/components/organisms/booking-form-index';
import { Navigation } from '@/components/organisms/navigation';
import Typography from '@/components/ui/typography';
import Image from 'next/image';
import Shape from '@/public/elements/shape.svg';
import cards from '@/constants/indexPage';
import { PostType } from '@/types/Post';
import HorizontalCard from '@/components/molecules/horizontal-card';

export default async function Index() {
  return (
    <>
      <header className="min-h-24">
        <Navigation />
        <div className="relative py-8 px-4 min-h-screen lg:min-h-64 lg:max-h-[800px] pt-24">
          <Image
            src="/images/busco-hero.jpg"
            alt="busco hero section"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom left"
            className="absolute top-0 left-0 z-0"
          />
          <div className="lg:grid lg:grid-cols-2 justify-between text-white relative z-20 container mx-auto h-full md:pt-16 md:mb-32">
            <div className="flex flex-col gap-12 lg:gap-24">
              <div>
                <Typography textColor="white" size="h4">
                  Preis berechnen und Busangebot in Rekordzeit erhalten
                </Typography>
                <Typography
                  type="h1"
                  textColor="white"
                  size="h2"
                  weight={'semibold'}
                >
                  Bus für Ihre<br></br>
                  nächste Reise finden.
                </Typography>
              </div>
            </div>
          </div>
          <div className="container relative z-1">
            <div className="md:absolute z-1 -bottom-36 left-0">
              <BookingFormIndex />
            </div>
          </div>
        </div>
      </header>
      <main className="py-16">
        <div className="container mx-auto">
          <UI.Spacer size={'lg'} />
          <UI.Spacer size={'lg'} />
          <div>
            <Image src={Shape} width={64} height={34} alt="Shape Busco" />
          </div>
          <UI.HeadlineContent
            content={{
              headline:
                'Bus finden und Angebot in 24h erhalten. Einfach und transparent.',
              content:
                'Idealer Bus war noch nie so einfach zu finden. Bei Busco haben wir den Buchungsprozess optimiert, damit Sie sich entspannt auf Ihre Reise freuen können. Wir bieten maßgeschneiderte Lösungen für jede Gruppengröße und jeden Anlass – zu klaren Preisen ohne versteckte Kosten. Überlassen Sie uns den Rest und genießen Sie Ihre Fahrt.',
            }}
          />
          <UI.Spacer size={'lg'} />
          <UI.Spacer size={'lg'} />
        </div>
        <div className="text-center">
          <UI.Typography size={'h4'} weight={'bold'} className="text-secondary">
            Passendes Angebot für jeden Bedarf
          </UI.Typography>
          <UI.Typography size={'h3'} weight={'bold'}>
            Bei Busco finden Sie einen Bus für jede Reisegruppe.
          </UI.Typography>
        </div>
        <UI.Spacer size={'lg'} />
        <div className="container mx-auto flex flex-col md:gap-24">
          {cards.map((card: PostType, index: number) => (
            <div key={index}>
              <HorizontalCard
                post={card}
                alignment={index % 2 === 1 ? 'left' : 'right'}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
