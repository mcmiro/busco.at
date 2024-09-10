'use client';
import useCookieConsent from '@/hooks/use-cookie-consent';
import { UI } from '../index';
import Link from 'next/link';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const {
    //handleAnalyticsCookies,
    //handleAceptAll,
    handleCloseSettings,
    //consent,
  } = useCookieConsent();

  return (
    <div className="fixed z-50 w-full p-8 bottom-0 left-0">
      <div className="container mx-auto px-4 border border-foreground bg-white py-8 relative rounded-xl">
        <UI.Button
          onClick={handleCloseSettings}
          type="button"
          size="icon"
          variant={'link'}
          className="absolute right-4 top-4"
        >
          <X />
        </UI.Button>

        <UI.Typography weight={'bold'} className="tracking-normal" size={'h4'}>
          Datenschutz Einstellungen
        </UI.Typography>
        <UI.Typography className="mt-2 tracking-normal">
          Wir verwenden Cookies um die Webseite Ihren Bedürfnissen anzupassen
          und aus Statistikzwecken. Der Gebrauch von Cookies erlaubt es uns,
          Ihnen die optimale Nutzung dieser Website anzubieten.
        </UI.Typography>
        <div className="flex flex-col gap-8 mt-8">
          <div>
            <UI.Typography weight={'bold'} className="tracking-normal">
              Notwendig
            </UI.Typography>
            <UI.Typography className="tracking-normal">
              Diese Cookies sind für die grundlegenden Funktionen der Website
              dringend erforderlich.
            </UI.Typography>
            <UI.Switch checked={true} disabled className="mt-4" />
          </div>
          {/*<div>
            <UI.Typography weight={'bold'} className="tracking-normal">
              Analyse
            </UI.Typography>
            <UI.Typography className="tracking-normal">
              Wir verwenden Funktionen des Webanalysedienstes Hotjar.
            </UI.Typography>
            <UI.Switch
              checked={consent.isAnalyticsEnabled}
              onClick={handleAnalyticsCookies}
              className="mt-4"
            />
          </div>*/}
          <div>
            <UI.Typography className="tracking-normal">
              Mehr Informationen zum Datenschutz finden Sie{' '}
              <Link href="/agb" className="underline" target="blank">
                hier
              </Link>
              .
            </UI.Typography>
          </div>
          <div className="flex gap-8">
            {/*<UI.Button onClick={handleAceptAll}>Alle aktivieren</UI.Button>*/}
            <UI.Button onClick={handleCloseSettings}>Schließen</UI.Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
