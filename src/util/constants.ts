import { environment } from '../environments/environment';

export const ROUTES = {
  HOME_PAGE_URL: '',
  PLATFORMS_PAGE_URL: 'platforms',
  PARTNERS_PAGE_URL: 'partners',
  MILESTONES_PAGE_URL: 'milestones',
  LEGAL_PAGE_URL: 'legal',
  PURCHASE_PAGE_URL: 'purchase',
  MILESTONE_PAGE_URL: 'milestones',
  LOOKUP_PAGE_URL: 'tx-lookup',
  PURCHASE_DETAILS: 'purchase-details',
  PARTNERSHIP_PROMO_PAGE_URL: 'partnership-deck'
};

/**
 * URLs for the application. Put your whitepaper URLs here or any
 * other URLs you might need
 */
export const EXTERNAL_URLS = {
  JS_SDK: 'https://github.com/cache-official/cache-typescript-sdk',
  NEM_OFFICIAL_WEBSITE: 'https://www.nem.io',
  CACHE_WALLET: environment.cache_download,
  WHITEPAPER: 'https://s3.amazonaws.com/maximus-cache/docs/Official_Cache_White_Paper_USA.pdf',
  WHITEPAPER_JPN: 'https://s3.amazonaws.com/maximus-cache/docs/Official_Cache_White_Paper_JPN.pdf',
  WHITEPAPER_RUS: 'https://s3.amazonaws.com/maximus-cache/docs/Official_Cache_White_Paper_RUS.pdf',
  WHITEPAPER_IND: 'https://s3.amazonaws.com/maximus-cache/docs/Official_Cache_White_Paper_IDN.pdf',
  WHITEPAPER_TUR: 'https://s3.amazonaws.com/maximus-cache/docs/Official_Cache_White_Paper_TUR.pdf',
  WHITEPAPER_FRA: 'https://s3.amazonaws.com/maximus-cache/docs/Official_Cache_White_Paper_FRA.pdf',
  WHITEPAPER_ITA: 'https://s3.amazonaws.com/maximus-cache/docs/Official_Cache_White_Paper_ITA.pdf',
  WHITEPAPER_FIL: 'https://s3.amazonaws.com/maximus-cache/docs/Official_Cache_White_Paper_FIL.pdf',
  BLOCKSTART_IO: 'https://www.blockstart.io',
  CACHEOUT: 'https://www.cacheout.io',
  CRYPTO_WALKTHROUGH_TUTORIAL: 'https://medium.com/devslopes-blog/buying-your-first-token-how-to-buy-cache-b13c3c3bf5df',
  TIMELINR_URL: 'https://www.gotimelinr.com/',
  DEVSLOPES_URL: 'https://www.devslopes.com',
  SIMPLE_MENTOR_URL: 'https://simplementor.io/',
  RUPIE_URL: 'https://rupie.io/',
  BTA_URL: 'https://blockchaintrainingalliance.com/',
  PEARSON_VUE_URL: 'https://home.pearsonvue.com/',
  BENTO_URL: 'https://bento.bydataflex.com/',
  RESOURCES: 'https://medium.com/cache-token'
};

export const API_URLS = {
  PRODUCTS: '/product/all',
  XEM_PAYMENT: '/transaction/initiate-xem-purchase',
  START_COINBASE_PURCHASE: '/transaction/initiate-coinbase-purchase',
  LOOKUP_COINBASE: '/product/purchase-lookup-coinbase',
  PROGRESS_BAR: '/info/tokens-sold?currency=',
  KYC: '/kyc/email'
};

export const QUERY_PARAMS = {
  PRODUCT: 'product',
  CACHE_AMOUNT: 'cache',
  ADDRESS: 'address'
};
