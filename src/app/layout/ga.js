// @ts-nocheck

import ReactGA from "react-ga";

export default () => {
  if (typeof window !== "undefined") {
    ReactGA.initialize("UA-5982830-12", { debug: true });
    // @ts-ignore
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log("GA start");
  }
};
