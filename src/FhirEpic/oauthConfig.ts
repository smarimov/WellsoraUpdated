export const oauthConfig = {
  clientId: import.meta.env.VITE_EPIC_FHIR_CLIENT_ID,
  redirectUri: import.meta.env.VITE_EPIC_FHIR_REDIRECT_URL,
  authorizeUrl: import.meta.env.VITE_EPIC_FHIR_AUTH_URL,
  tokenUrl: import.meta.env.VITE_EPIC_FHIR_TOKEN_URL,
  scope: "openid",
  audience: import.meta.env.VITE_EPIC_FHIR_API_SERVER_URL,
};
