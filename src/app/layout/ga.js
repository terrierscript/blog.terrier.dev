// @ts-nocheck

import ReactGA from "react-ga";

export default () => {
  ReactGA.initialize("UA-5982830-12", { debug: true });
  ReactGA.pageview(window.location.pathname + window.location.search);
  console.log("GA start");
};
