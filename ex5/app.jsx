import React from "react";
import { render } from "react-dom";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import Main from "./Main.jsx";

(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: "5e29e34e2a49f409996d7194",
    user: { anonymous: true },
    options: {
      /* ... */
    }
  });
  render(
    <LDProvider>
      <Main />
    </LDProvider>,
    document.getElementById("root")
  );
})();
