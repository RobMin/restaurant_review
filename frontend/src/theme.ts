import { isDev } from './config';
import { createMuiTheme } from '@material-ui/core/styles';

const spacing = 8;

export const MOBILE_HEADER_HEIGHT = 56;
export const HEADER_HEIGHT = 64;

const defaultThemeObj = createMuiTheme();
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#2489CA',
      dark: '#0977B9',
      light: '#3C99D4'
    },
    secondary: {
      main: '#424242',
      light: '#505050'
    },
    background: {
      default: '#FFFFFF'
    },
  },
  mixins: {
    toolbar: {
      minHeight: MOBILE_HEADER_HEIGHT,
      [ defaultThemeObj.breakpoints.up('md') ]: {
        minHeight: HEADER_HEIGHT
      }
    }
  },
  spacing
});

if (isDev) {
  console.log(theme);
}

export default theme;
