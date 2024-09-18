// src/i18n/request.ts
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing, Locale } from './routing';

// Helper function to check if a string is a valid Locale
function isLocale(value: string): value is Locale {
  return routing.locales.includes(value as Locale);
}

export default getRequestConfig(async (params) => {
  const locale = params.locale as string;

  if (!isLocale(locale)) {
    notFound();
  }

  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});