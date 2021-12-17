import "@fontsource/karla/variable.css";
import "@fontsource/manrope/variable.css";
import * as React from "react";
import { render } from "react-dom";
import { DefaultSuspense } from "./bundle/common/components/default-suspense";
import { lazyImportModule } from "./bundle/common/import-module";

const RootApp = lazyImportModule("root/root", "RootApp");

render(
  <DefaultSuspense>
    <RootApp />
  </DefaultSuspense>,
  document.getElementById("root"),
);
