import { UserManager } from "oidc-client-ts";

import { CONFIG } from "./code/auth/config";

document.addEventListener("DOMContentLoaded", async () => {
  const userManager = new UserManager(CONFIG);

  const urlSearchParams = new URLSearchParams(window.location.search);

  const code = urlSearchParams.get("code");
  const state = urlSearchParams.get("state");

  if (code && state) {
    removeQueryStringParametersFromCurrentURL();

    console.log(code)
    console.log(state)
  } else {
    const user = await userManager.getUser();

    if (!user) {
      userManager.signinRedirect();
    } else {
      console.log(user)
    }
  }
});

function removeQueryStringParametersFromCurrentURL() {
    const currentUrl = window.location.href;
    const urlObj = new URL(currentUrl);

    urlObj.search = '';

    window.history.pushState({}, '', urlObj.toString());
}
