// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

/**
 * Environment variables
 * Use this file to manage different data for production, dev, staging, etc
 */
export const environment = {
  production: false,
  trackAnalytics: false,
  environmentName: 'dev',
  amplitude_api_key: '',
  intercom_api_key: '',
  api_url: 'https://api.yourdevelopmentapi.io/cache/v1',
  cache_download: 'https://github.com/cache-official/cache-wallet/releases'
};
