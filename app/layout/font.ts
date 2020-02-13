// let logoFont = "Josefin Sans"
// logoFont = "Indie Flower"
// logoFont = "Shadows Into Light"
// logoFont = "Gloria Hallelujah"
// logoFont = "Amatic SC"
// logoFont = "Passion One"
// logoFont = "Permanent Marker"
// logoFont = "Baloo"
// logoFont = "Handlee"
// logoFont = "Press Start 2P"
// logoFont = "Righteous"
// logoFont = "Caveat Brush"
// logoFont = "Patrick Hand"
// logoFont = "Rock Salt"
// logoFont = "Coming Soon"
// logoFont = "Reenie Beanie"

type FontSetting = {
  sizes?: number[]
}
const logos: { [s: string]: FontSetting } = {
  Nunito: {
    sizes: [400, 600, 700, 800]
  },
  Schoolbell: {},
  Quicksand: {
    sizes: [400, 500, 700]
  }
}

// const family: string = Object.entries(logos)
//   .map(([key, value]) => {
//     const sizes = value.sizes || [];
//     return [key, sizes.join(",")].filter(i => !!i).join(":");
//   })
//   .join("|");

export type LogoEnum = keyof typeof logos
export const defaultFont: LogoEnum = "Quicksand"

// export const generateFontUrl = () => {
//   const s = `https://fonts.googleapis.com/css?family=${family}`;
//   console.log(s);
//   return s;
// };
