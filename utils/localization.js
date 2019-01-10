// import NextI18Next from 'next-i18next';

// const options = {
//   defaultLanguage: 'en',
//   otherLanguages: ['bg'],
//   localeSubpaths: true,
// };
// const localization = new NextI18Next(options);
// export default localization;

const NextI18Next = require('next-i18next');

const options = {
  defaultLanguage: 'en',
  otherLanguages: ['bg'],
  localeSubpaths: true,
};
module.exports = new NextI18Next(options);
