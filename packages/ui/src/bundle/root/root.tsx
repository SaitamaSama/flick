import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazyImportModule } from "../common/import-module";

const Dashboard = lazyImportModule("root/dashboard");

export const RootApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Dashboard />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
