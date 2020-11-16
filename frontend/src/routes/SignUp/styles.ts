import { createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  container: {
    paddingTop: 25,
    paddingBottom: 80,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  formWrapper: {
    padding: 25
  },
  title: {
    textAlign: 'center',
    paddingBottom: 20
  },
  pageWrapper: {
    width: '100%',
    height: '100%'
  },
  bottomText: {
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20
  }
});

export default styles;
