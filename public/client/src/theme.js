import { createMuiTheme } from "@material-ui/core/styles";
import OpenSans from "./fonts/opensans/OpenSans-Regular.ttf";
const openSans = {
  fontFamilu: "Open Sans",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('OpenSans'),
    local('OpenSans-Regular'),
    url(${OpenSans}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};
export const theme = createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    background: {
      default: "#303030",
      paper: "#0277bd",
    },
    primary: {
      main: "#0277bd",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f9a825",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: [openSans],
  },
});
export default theme;
