import React from "react";

import RepositoriesListPage from "./containers/ReposListPage";
import "./styles/index.less";

export default () => (
  <>
    <div className="app-wrapper">
      <header className="header">
        <h1>GitHub repositories search </h1>
      </header>
      <RepositoriesListPage />
    </div>
  </>
);
