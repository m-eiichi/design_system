import { toCamelCase, isCamelCase } from "../utils/camel-case";

export const white = "#fff";
export const black = "#000";
export const transparent = "transparent";

// === brand ===
export const brandColor = {
  1200: "",
  1100: "",
  1000: "",
  900: "",
  800: "",
  700: "",
  600: "",
  500: "",
  400: "",
  300: "",
  200: "",
  100: "",
  50: "",
};

// === grey ===
export const grey = {
  900: "#1a1a1a",
  800: "#333",
  700: "#4d4d4d",
  600: "#666",
  536: "#767676",
  500: "#7f7f7f",
  417: "#959595",
  400: "#999",
  300: "#b3b3b3",
  200: "#ccc",
  100: "#e6e6e6",
  50: "#f2f2f2",
};

// === opacity-grey ===
export const opacityGrey = {
  900: "rgb(0 0 0 / 90%)",
  800: "rgb(0 0 0 / 80%)",
  700: "rgb(0 0 0 / 70%)",
  600: "rgb(0 0 0 / 60%)",
  536: "rgb(0 0 0 / 53.6%)",
  500: "rgb(0 0 0 / 50%)",
  417: "rgb(0 0 0 / 41.7%)",
  400: "rgb(0 0 0 / 40%)",
  300: "rgb(0 0 0 / 30%)",
  200: "rgb(0 0 0 / 20%)",
  100: "rgb(0 0 0 / 10%)",
  50: "rgb(0 0 0 / 5%)",
  0: "rgb(0 0 0 / 0%)",
};

// === blue ===
export const blue = {
  1200: "#000060",
  1100: "#000071",
  1000: "#00118f",
  900: "#0017c1",
  800: "#0031d8",
  700: "#264af4",
  600: "#3460fb",
  500: "#4979f5",
  400: "#7096f8",
  300: "#9db7f9",
  200: "#c5d7fb",
  100: "#d9e6ff",
  50: "#e8f1fe",
};

// === light-blue ===
export const lightBlue = {
  1200: "#00234b",
  1100: "#00316a",
  1000: "#00428c",
  900: "#0055ad",
  800: "#0066be",
  700: "#0877d7",
  600: "#008bf2",
  500: "#39abff",
  400: "#57b8ff",
  300: "#97d3ff",
  200: "#c0e4ff",
  100: "#dcf0ff",
  50: "#f0f9ff",
};

// === cyan ===
export const cyan = {
  1200: "#003741",
  1100: "#004c59",
  1000: "#006173",
  900: "#006f83",
  800: "#008299",
  700: "#008da6",
  600: "#00a3bf",
  500: "#01b7d6",
  400: "#2bc8e4",
  300: "#79e2f2",
  200: "#99f2ff",
  100: "#c8f8ff",
  50: "#e6fcff",
};

export const green = {
  1200: "#032213",
  1100: "#08351f",
  1000: "#0c472a",
  900: "#115a36",
  800: "#197a4b",
  700: "#1d8b56",
  600: "#259d63",
  500: "#2cac6e",
  400: "#51b883",
  300: "#71c598",
  200: "#9bd4b5",
  100: "#c2e5d1",
  50: "#e6f5ec",
};

export const lime = {
  1200: "#1e2d00",
  1100: "#2c4100",
  1000: "#3e5a00",
  900: "#507500",
  800: "#618e00",
  700: "#6fa104",
  600: "#7eb40d",
  500: "#8cc80c",
  400: "#9ddd15",
  300: "#ade830",
  200: "#c0f354",
  100: "#d0f5a2",
  50: "#ebfad9",
};

export const yellow = {
  1200: "#604b00",
  1100: "#6e5600",
  1000: "#806300",
  900: "#927200",
  800: "#a58000",
  700: "#b78f00",
  600: "#d2a400",
  500: "#ebb700",
  400: "#ffc700",
  300: "#ffd43d",
  200: "#ffe380",
  100: "#fff0b3",
  50: "#fbf5e0",
};

export const orange = {
  1200: "#541e00",
  1100: "#6d2700",
  1000: "#8b3200",
  900: "#ac3e00",
  800: "#c74700",
  700: "#e25100",
  600: "#fb5b01",
  500: "#ff7628",
  400: "#ff8d44",
  300: "#ffa66d",
  200: "#ffc199",
  100: "#ffdfca",
  50: "#ffeee2",
};

export const red = {
  1200: "#620000",
  1100: "#850000",
  1000: "#a90000",
  900: "#ce0000",
  800: "#ec0000",
  700: "#fa0000",
  600: "#fe3939",
  500: "#ff5454",
  400: "#ff7171",
  300: "#ff9696",
  200: "#fbb",
  100: "#ffdada",
  50: "#fdeeee",
};

export const magenta = {
  1200: "#3b003b",
  1100: "#500050",
  1000: "#6c006c",
  900: "#8b008b",
  800: "#a0a",
  700: "#c000c0",
  600: "#db00db",
  500: "#f137f1",
  400: "#f661f6",
  300: "#ff8eff",
  200: "#ffaeff",
  100: "#ffd0ff",
  50: "#f3e5f4",
};

export const purple = {
  1200: "#21004b",
  1100: "#30016c",
  1000: "#41048e",
  900: "#5109ad",
  800: "#5c10be",
  700: "#6f23d0",
  600: "#8843e1",
  500: "#a565f8",
  400: "#bb87ff",
  300: "#cda6ff",
  200: "#ddc2ff",
  100: "#ecddff",
  50: "#f1eafa",
};

export const baseColor = {
  // === base ===
  white,
  black,
  transparent,

  // === brand ===
  brand: brandColor,

  // === grey ===
  grey,

  // === opacity-grey ===
  opacityGrey: opacityGrey,

  // === blue ===
  blue,

  // === light-blue ===
  lightBlue,

  // === cyan ===
  cyan,

  // === green ===
  green,

  // === lime ===
  lime,

  // === yellow ===
  yellow,

  // === orange ===
  orange,

  // === red ===
  red,

  // === magenta ===
  magenta,

  // === purple ===
  purple,
};

// background colors
export const background = {
  // === background ===
  primary: white,
  secondary: grey[100],
  tertiary: grey[50],
  primaryDark: grey[900],
  secondaryDark: grey[700],
  tertiaryDark: grey[800],
};

// text colors
export const text = {
  base: grey[900],
  description: grey[700],
  placeHolder: grey[600],
  onFill: white,
  link: blue[800],
  hover: blue[900],
  active: blue[900],
  visited: blue[900],
  disabled: grey[500],
  baseDark: white,
  descriptionDark: grey[400],
  placeHolderDark: grey[500],
  linkDark: blue[500],
  hoverDark: blue[300],
  activeDark: blue[300],
  visitedDark: blue[300],
  disabledDark: grey[600],
};

// status colors
export const status = {
  information: lightBlue[700],
  informationContrast: white,
  success: green[800],
  successContrast: white,
  alert: red[800],
  alertContrast: white,
  warning: orange[800],
  warningContrast: white,
  informationDark: lightBlue[500],
  successDark: green[700],
  alertDark: red[600],
  warningDark: orange[600],
};

// icon colors
export const icon = {
  label: grey[900],
  active: blue[800],
  alert: red[800],
  disabled: grey[500],
  labelDark: white,
  activeDark: blue[500],
  alertDark: red[600],
  disabledDark: grey[600],
};

// === button ===
export const button = {
  normal: blue[800],
  hover: blue[900],
  active: blue[1100],
  disabled: grey[500],
  normalDark: blue[500],
  hoverDark: blue[100],
  activeDark: blue[200],
  disabledDark: grey[600],
};

// === chart ===
export const chart = {
  primary: blue[800],
  primaryLight: blue[400],
  secondary: blue[200],
  secondaryDark: blue[500],
};

// === theme ===
export const theme = {
  // darkBg: grey,
  // lightBg: white,
};

// すべてのカラートークンをまとめたオブジェクト
export const color = {
  ...baseColor,

  // === background ===
  background,

  // === text ===
  text,

  // === status ===
  status,

  // === icon ===
  icon,

  // === button ===
  button,

  // === chart ===
  chart,

  // === theme ===
  theme,
};
