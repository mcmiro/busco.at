import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export type CookieConsentProps = {
  isSettigsOpen: boolean;
  isAnalyticsEnabled: boolean;
};

export const consentAtom = atomWithStorage<CookieConsentProps>(
  'cookieConsent',
  {
    isSettigsOpen: true,
    isAnalyticsEnabled: false,
  }
);

const useCookieConsent = () => {
  const [consent, setConsent] = useAtom<CookieConsentProps>(consentAtom);

  useEffect(() => {
    if (consent.isAnalyticsEnabled === true) {
      initializeTrackingScripts();
    }
  }, [consent]);

  const handleAnalyticsCookies = () => {
    setConsent({ ...consent, isAnalyticsEnabled: !consent.isAnalyticsEnabled });
  };

  const handleAceptAll = () => {
    setConsent({ ...consent, isAnalyticsEnabled: true, isSettigsOpen: false });
  };

  const handleCloseSettings = () => {
    setConsent({ ...consent, isSettigsOpen: false });
  };

  const initializeTrackingScripts = () => {
    console.log('scripts');
  };

  return {
    consent,
    setConsent,
    handleAnalyticsCookies,
    handleAceptAll,
    handleCloseSettings,
  };
};

export default useCookieConsent;
