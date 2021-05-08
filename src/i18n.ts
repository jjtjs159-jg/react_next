import ICU, { IcuInstance } from 'i18next-icu';
import en from 'i18next-icu/locale-data/en';
import ko from 'i18next-icu/locale-data/ko';
import NextI18Next from 'next-i18next';
import { useTranslation as originalUseTranslation } from 'react-i18next';
import { NextComponentType, NextPageContext } from 'next';
import path from 'path';

const use: IcuInstance[] = [];
const icu = new ICU({});
icu.addLocaleData(ko);
icu.addLocaleData(en);
use.push(icu);

const NextI18NextInstance = new NextI18Next({
  browserLanguageDetection: false,
  debug: process.env.NODE_ENV === 'development',
  defaultLanguage: 'en',
  defaultNS: 'common',
  fallbackLng: 'en',
  keySeparator: '###',
  localePath: path.resolve('public/static/locales'),
  otherLanguages: ['ko'],
  use,
});

export const { appWithTranslation, withTranslation } = NextI18NextInstance;

export default NextI18NextInstance;

export const includeDefaultNamespaces = (namespaces: string[]) => ['common'].concat(namespaces);

export const { Trans } = NextI18NextInstance;
export const useTranslation = originalUseTranslation;
export type I18nPage<P = {}> = NextComponentType<
  NextPageContext,
  { namespacesRequired: string[] },
  P & { namespacesRequired: string[] }
>;
