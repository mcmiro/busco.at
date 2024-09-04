'use client';
import { useAtom } from 'jotai';
import { consentAtom } from '@/hooks/use-cookie-consent';

function CtaCookies() {
  const [consent, setConsent] = useAtom(consentAtom);
  return (
    <div
      onClick={() => setConsent({ ...consent, isSettigsOpen: true })}
      className="hover:md:underline hover:md:text-gray-500 cursor-pointer"
    >
      Cookie Einstellungen
    </div>
  );
}
export default CtaCookies;
