import zh from 'bee-locale/build/zh_CN.js';
import appLocaleData from 'react-intl/locale-data/zh';
import messages from './zh_CN.json';

export default {
  messages: {
    ...messages,
  },
  tinperLocale: zh,
  locale: 'zh',
  data: appLocaleData
};
