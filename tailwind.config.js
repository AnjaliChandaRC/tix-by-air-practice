/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        textlg: "22px",
        textXl: "32px",
        textXXl: "65px",
      },
      colors: {
        gray: "#E7E7E7",
        darkgraytwo: "#565351",
        orange: "#FDB384",
        yellow: "#FCD168",
        green: "#A1D2BA",
        davygray: "#4D4D4D",
        darkgray: "#B2B2B2",
        granitegray: "#666666",
        smokyblack: "#0D0C0C",
        neongray: "#808080",
        antiquewhite: "#F7EADA",
        albescentwhite: "#F6E8DE",
        ultrayellow: "#FC9453",
        whitesmoke: "#F6F6F6",
        orangecrayola: "#FB6609",
        Fluorescentorange: "#FABE28",
        mintgreen: "#55AE82",
        davylightgray: "#504F4F",
        gainbora: "#D9D9D9",
        applegreen: "#84B140",
        racingred: "#CD0404",
        eerieblack: "#252423",
        seashell: "#FFF7F3",
        overlayBg: "#000000a7",
        darkBorder: "#4c4c4c",
        cedarbrown: "#4C3628",
        shadowgray: "#4A4A4A",
        graytwo: "#7B7B7B",
        mediumgray: "#B4B4B4",
        greige: "#ADA499",
        platinum: "#EAEAEA",
      },
    },
  },
  plugins: [],
};
