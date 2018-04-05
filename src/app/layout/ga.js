import ReactGA from "react-ga";

export default () => {
  ReactGA.initialize("UA-5982830-12");
  ReactGA.pageview(window.location.pathname + window.location.search);
  console.log("GA start");
};
