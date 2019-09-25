import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
    issuer: 'http://sso.teste.work',
    clientId: 'angular-demo',
    scope: 'openid profile email api_demo.api jp_api.user',

    redirectUri: window.location.origin ,
    silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
    requireHttps: false,
    silentRefreshTimeout: 5000, // For faster testing
    timeoutFactor: 0.25, // For faster testing
    sessionChecksEnabled: true,
    showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
    clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040
  };