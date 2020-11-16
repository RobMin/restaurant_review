import { MOBILE_HEADER_HEIGHT, HEADER_HEIGHT } from './theme';
import { createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  main: {
    flexGrow: 1,
    paddingTop: MOBILE_HEADER_HEIGHT,
    width: '100%',
    height: `100vh`,
    [ theme.breakpoints.up('md') ]: {
      paddingTop: HEADER_HEIGHT
    }
  }
});

export default styles;
