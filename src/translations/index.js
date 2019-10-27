import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  en: () => require('./en.json'),
  ptbr: () => require('./ptbr.json'),
  de: () => require('./de.json'),
};

const fallback = { languageTag: 'en', isRTL: false };
const { languageTag } =
  RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
  fallback;

i18n.locale = languageTag;
i18n.translations = { [languageTag]: translationGetters[languageTag]() };

export default i18n;
