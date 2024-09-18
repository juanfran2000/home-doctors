import {defineRouting} from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 

export type Locale = 'en' | 'es'; // Todos los locales soportados deben estar aquí

export const routing = defineRouting({
  locales: ['en', 'es'] as Locale[], // Asegúrate de que este tipo se use aquí
  defaultLocale: 'en'
});

 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);