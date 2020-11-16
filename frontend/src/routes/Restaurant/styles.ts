import { createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  container: {
    paddingBottom: theme.spacing(3)
  },
  topImage: {
    width: '100%',
    height: '35vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    [ theme.breakpoints.down('sm') ]: {
      textAlign: 'center'
    }
  },
  noTopMargin: {
    marginTop: 0
  }
});

export default styles;
