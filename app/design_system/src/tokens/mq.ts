const breakpoint = {
  mobile: 575,
  tablet: 576,
  desktop: 993,
  lDesktop: 1240,
};

export const mq = {
  ...Object.fromEntries(
    Object.entries(breakpoint).map(([key, value]) => [key, `${value}px`]),
  ),

  // === viewport ===
  viewport: {
    mobile: `screen and (width <= ${breakpoint.mobile}px)`,
    tablet: `screen and (width >= ${breakpoint.mobile + 1}px) and (width <= ${
      breakpoint.desktop - 1
    }px)`,
    desktop: `screen and (min-width: ${breakpoint.desktop}) and (max-width: ${
      breakpoint.lDesktop - 1
    }px)`,
    overTablet: `screen and (min-width: ${breakpoint.tablet}px)`,
    overDesktop: `screen and (width >= ${breakpoint.desktop}px)`,
    lDesktop: `screen and (min-width: ${breakpoint.lDesktop}px)`,
  },
};
