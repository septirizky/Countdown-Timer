import { Container, Typography } from "@material-ui/core";
import Countdown from "./components/Countdown";
import "./App.css";

function App() {
  return (
    <main className="app-shell">
      <div className="app-shell__glow app-shell__glow--left" />
      <div className="app-shell__glow app-shell__glow--right" />
      <Container maxWidth="sm" className="app-shell__container">
        <section className="timer-card">
          <div className="timer-card__header">
            <span className="timer-card__eyebrow">Focus Session</span>
            <Typography variant="h3" component="h1" className="timer-card__title">
              Countdown Timer
            </Typography>
            <Typography variant="body1" className="timer-card__subtitle">
              Atur durasi, mulai hitung mundur, lalu jeda atau reset kapan saja.
            </Typography>
          </div>
          <Countdown />
        </section>
      </Container>
    </main>
  );
}

export default App;
