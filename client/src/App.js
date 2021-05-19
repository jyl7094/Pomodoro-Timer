import { Grid, Paper } from '@material-ui/core';
import Timer from './components/Timer';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <Grid container style={{ height: '100vh' }} justify="center" alignItems="center" spacing={0}>
      <Grid item sm={5}>
        <Paper className={classes.paper} align="center">
            <Timer />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default App;
