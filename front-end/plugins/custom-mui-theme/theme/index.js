import { createMuiTheme } from '@material-ui/core/styles';

const themeData = {
  palette: {
    primary: {
      main: '#e6a3a3',
    },
    secondary: {
      main: '#993f3f',
    },
  }
}

const themeName = "pinkAndPink";

export default createMuiTheme({ ...themeData, themeName });

