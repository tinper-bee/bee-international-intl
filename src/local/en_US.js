import en from 'bee-locale/build/en_US.js';
import appLocaleData from 'react-intl/locale-data/en';
import messages from './en_US.json';

export default {
  messages: {
    ...messages,
  },
  tinperLocale: en,
  locale: 'en',
  data: appLocaleData
};
