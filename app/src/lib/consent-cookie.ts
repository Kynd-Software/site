const consentCookieName = 'kyndCookieConsent';
const consentCookieLifetimeDays = 365;
const consentCookiePath = '/';
const consentAcceptValue = 'true';
const consentDeclineValue = 'false';

export type ConsentCookieValue = typeof consentAcceptValue | typeof consentDeclineValue;

interface SetConsentCookieOptions {
  name?: string;
  value: ConsentCookieValue;
  expiresInDays?: number;
  path?: string;
  sameSite?: 'Lax' | 'Strict' | 'None';
}

export const consentCookie = {
  name: consentCookieName,
  acceptValue: consentAcceptValue,
  declineValue: consentDeclineValue,
} as const;

export const getCookieValue = (name: string): string | undefined => {
  if (typeof document === 'undefined') {
    return undefined;
  }

  const encodedPrefix = `${encodeURIComponent(name)}=`;

  for (const cookieEntry of document.cookie.split(';')) {
    const trimmedEntry = cookieEntry.trim();

    if (trimmedEntry.startsWith(encodedPrefix)) {
      return decodeURIComponent(trimmedEntry.slice(encodedPrefix.length));
    }
  }

  return undefined;
};

export const setConsentCookie = ({
  name = consentCookieName,
  value,
  expiresInDays = consentCookieLifetimeDays,
  path = consentCookiePath,
  sameSite = 'Lax',
}: SetConsentCookieOptions): void => {
  if (typeof document === 'undefined') {
    return;
  }

  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + expiresInDays);

  const secureAttribute =
    typeof window !== 'undefined' && window.location.protocol === 'https:' ? '; Secure' : '';

  document.cookie =
    `${encodeURIComponent(name)}=${encodeURIComponent(value)}` +
    `; Expires=${expiresAt.toUTCString()}` +
    `; Path=${path}` +
    `; SameSite=${sameSite}` +
    secureAttribute;
};

export const clearCookie = (name: string, path = consentCookiePath): void => {
  if (typeof document === 'undefined') {
    return;
  }

  document.cookie =
    `${encodeURIComponent(name)}=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=${path}; SameSite=Lax`;
};
