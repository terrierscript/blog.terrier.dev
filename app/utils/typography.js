import Typography from "typography"
// import fairyGatesTheme from "typography-theme-fairy-gates";

export const headerFont = "Quicksand"
// export const headerFont = "Hiragino Kaku Gothic"

const theme = {
  baseFontSize: "18px",
  googleFonts: [
    {
      name: "Quicksand",
      styles: ["400", "500", "700"]
    },
    {
      name: "Nunito",
      styles: ["400", "600", "700", "800", "900"]
      // styles: [400, 500]
    }
  ],
  headerFontFamily: [headerFont, "Helvetica"],
  bodyFontFamily: [
    "Hiragino Kaku Gothic",
    "-apple-system,BlinkMacSystemFont",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol"
  ],
  bodyFontColor: "#787878",
  baseLineHeight: 1.45,
  includeNormalize: true,

  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const linkColor = "#555"
    return { a: { color: linkColor } }
  }
}

const typography = new Typography(theme)

export default typography
