import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
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
  headerFontFamily: ["Quicksand"]
});

export default typography;
