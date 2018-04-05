import Typography from "typography";
// import fairyGatesTheme from "typography-theme-fairy-gates";

const theme = {
  baseFontSize: 12,
  googleFonts: [
    {
      name: "Nunito",

      styles: [400, 600, 700, 800]
    },
    {
      name: "Quicksand",
      styles: [400, 500, 700]
    }
  ],
  headerFontFamily: ["Quicksand", "Helvetica"],
  // bodyFontFamily: [],
  includeNormalize: true
};

const typography = new Typography(theme);

export default typography;
