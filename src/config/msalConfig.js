export const msalConfig = {
  auth: {
    clientId: 'c8e4fd75-2ac5-4cc5-b82c-8bd59c22b7a7', // This is the ONLY mandatory field that you need to supply.
    authority: 'https://pengb2c.b2clogin.com/pengb2c.onmicrosoft.com/b2c_1_signupsignin', // Choose SUSI as your default authority.
    knownAuthorities: ['pengb2c.b2clogin.com'], // Mark your B2C tenant's domain as trusted.
    redirectUri: 'http://localhost:3000/', // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
    postLogoutRedirectUri: 'http://localhost:3000/', // Indicates the page to navigate after logout.
    navigateToLoginRequestUrl: false, // If 'true', will navigate back to the original request location before processing the auth code response.
  },
  cache: {
    cacheLocation: 'sessionStorage', // Configures cache location. 'sessionStorage' is more secure, but 'localStorage' gives you SSO between tabs.
    storeAuthStateInCookie: false, // Set this to 'true' if you are having issues on IE11 or Edge
  }
}