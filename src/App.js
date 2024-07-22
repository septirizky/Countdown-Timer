import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import Countdown from "./components/Countdown";
import "./App.css";

const styles = makeStyles(() => ({
  root: {
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
}));

function App() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Container maxWidth="xs">
        <Grid container direction="column" alignItems="center">
          <Grid item style={{ marginBottom: 4 }}>
            <Typography variant="h5" className="Header" gutterBottom>
              <strong>COUNTDOWN TIMER</strong>
            </Typography>
          </Grid>
          <Countdown />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
