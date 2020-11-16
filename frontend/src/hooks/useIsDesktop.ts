import { useTheme, useMediaQuery } from "@material-ui/core";

export const useIsDesktop = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return isDesktop;
};
