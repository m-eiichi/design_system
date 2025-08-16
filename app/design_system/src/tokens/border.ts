import { color } from "./color";
const { grey, yellow, blue, red, white } = color;

// === border ===
export const border = {
  field: `${grey[900]} "1px"`,
  fieldBold: `${grey[900]} "2px"`,
  divider: `${grey[417]} "1px"`,
  focused: `${yellow[700]} "2px"`,
  selected: `${blue[800]} "2px"`,
  borderAlert: `${red[800]} "2px"`,
  disabled: `${grey[500]} "1px"`,
  disabledBold: `${grey[500]} "2px"`,
  fieldDark: `${white} "1px"`,
  fieldDarkBold: `${white} "2px"`,
  dividerDark: `${grey[536]} "1px"`,
  focusedDark: `${yellow[500]} "2px"`,
  selectedDark: `${blue[500]} "2px"`,
  alertDark: `${red[600]} "2px"`,
  disabledDark: `${grey[600]} "1px"`,
  disabledDarkBold: `${grey[600]} "2px"`,
};
