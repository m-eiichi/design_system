import { color } from "./color";
const { grey, yellow, blue, red, white } = color;

// === border ===
export const border = {
  field: `${grey[900]} 1px solid`,
  fieldBold: `${grey[900]} 2px solid`,
  divider: `${grey[417]} 1px solid`,
  focused: `${yellow[700]} 2px solid`,
  selected: `${blue[800]} 2px solid`,
  borderAlert: `${red[800]} 2px solid`,
  disabled: `${grey[500]} 1px solid`,
  disabledBold: `${grey[500]} 2px solid`,
  fieldDark: `${white} 1px solid`,
  fieldDarkBold: `${white} 2px solid`,
  dividerDark: `${grey[536]} 1px solid`,
  focusedDark: `${yellow[500]} 2px solid`,
  selectedDark: `${blue[500]} 2px solid`,
  alertDark: `${red[600]} 2px solid`,
  disabledDark: `${grey[600]} 1px solid`,
  disabledDarkBold: `${grey[600]} 2px solid`,
  buttonSecondaryNormal: `${blue[800]} 1px solid`,
};
