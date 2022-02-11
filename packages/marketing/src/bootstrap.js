import * as React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Mount function to start up the apps
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// if we are in development and in isolation
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("div#marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// We are running our application through container
// and we should export the mount function
export { mount };
