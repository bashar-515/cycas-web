import type { OidcClientSettings } from "oidc-client-ts";

export const CONFIG: OidcClientSettings = {
  authority: "http://localhost:8080",
  client_id: "340067296724713475",
  redirect_uri: "http://localhost:5173",
  post_logout_redirect_uri: "http://localhost:5173",
  response_type: "code",
  scope: "openid profile email",
  // code_challenge_method: "S256",
};
