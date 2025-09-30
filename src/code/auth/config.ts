import type { OidcClientSettings } from "oidc-client-ts";

export const CONFIG: OidcClientSettings = {
  authority: import.meta.env.VITE_AUTHORITY,
  client_id: import.meta.env.VITE_CLIENT_ID,
  redirect_uri: import.meta.env.REDIRECT_URI,
  post_logout_redirect_uri: import.meta.env.POST_LOGOUT_REDIRECT_URI,
  response_type: "code",
  scope: "openid profile email",
  // code_challenge_method: "S256",
};
