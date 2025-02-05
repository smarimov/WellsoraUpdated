import axios from "axios";
import { oauthConfig } from "./oauthConfig";

interface OAuthConfig {
  clientId: string;
  redirectUri: string;
  authorizeUrl: string;
  tokenUrl: string;
  scope: string;
  audience?: string;
}

interface Tokens {
  access_token: string;
  refresh_token?: string;
  patient?: string;
}

const generateRandomString = (length: number = 16): string => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join("");
};

export const generatePKCECodes = async (): Promise<string> => {
  const codeVerifier = generateRandomString();
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);

  // Compute the SHA-256 hash of the code verifier
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  // Convert the hash to a base64 URL-safe string
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // Convert the byte array to a Base64 string
  const base64Hash = hashArray
    .map((byte) => String.fromCharCode(byte))
    .join("");

  // Convert to Base64 URL-safe encoding
  const codeChallenge = btoa(base64Hash)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");

  console.log(`pkce code inside: ${codeChallenge}`);
  sessionStorage.setItem("pkce_code_verifier", codeVerifier);
  console.log(`code verifier before redirect: ${codeVerifier}`);
  return codeChallenge;
};

export const getAuthorizationUrl = async (): Promise<string> => {
  const { clientId, redirectUri, authorizeUrl, scope, audience } =
    oauthConfig as OAuthConfig;
  const codeChallenge = await generatePKCECodes();
  console.log(`pkce code after: ${codeChallenge}`);

  const params = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    redirect_uri: redirectUri,
    scope,
    state: generateRandomString(),
    aud: audience || "",
    // code_challenge: codeChallenge,
    // code_challenge_method: "S256",
  });

  return `${authorizeUrl}?${params.toString()}`;
};

export const redirectToLogin = async (): Promise<void> => {
  window.location.href = await getAuthorizationUrl();
};

export const exchangeCodeForToken = async (code: string): Promise<Tokens> => {
  const { tokenUrl, clientId, redirectUri } = oauthConfig as OAuthConfig;
  const codeVerifier = sessionStorage.getItem("pkce_code_verifier");
  console.log(`code verifier after redirect: ${codeVerifier}`);

  const params = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: redirectUri,
    client_id: clientId,
    // code_verifier: codeVerifier || "",
  });

  console.log(`Token URL: ${tokenUrl}`);
  console.log(`data: ${params}`);

  const response = await axios.post(tokenUrl, params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return response.data as Tokens;
};

export const setTokens = (tokens: Tokens): void => {
  console.log("Token keldi: ", tokens);
  sessionStorage.setItem("patientId", tokens.patient || "");
  sessionStorage.setItem("access_token", tokens.access_token);
  if (tokens.refresh_token) {
    sessionStorage.setItem("refresh_token", tokens.refresh_token);
  }
};

/**
 * Refresh the access token using the refresh token.
 */
export const refreshAccessToken = async (): Promise<string> => {
  const { tokenUrl, clientId } = oauthConfig as OAuthConfig;
  const refreshToken = sessionStorage.getItem("refresh_token");

  if (!refreshToken) {
    throw new Error("No refresh token available");
  }

  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: clientId,
  });

  const response = await axios.post(tokenUrl, params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const { access_token, refresh_token } = response.data as Tokens;

  // Store the new access token and refresh token
  sessionStorage.setItem("access_token", access_token);
  if (refresh_token) {
    sessionStorage.setItem("refresh_token", refresh_token);
  }

  return access_token; // Return the new access token
};

/**
 * Retrieves the access token from secure storage.
 */
export const getAccessToken = (): string | null => {
  return sessionStorage.getItem("access_token");
};

/**
 * Clears all stored tokens (useful for logout).
 */
export const clearTokens = (): void => {
  sessionStorage.removeItem("access_token");
  sessionStorage.removeItem("refresh_token");
  sessionStorage.removeItem("pkce_code_verifier");
};
