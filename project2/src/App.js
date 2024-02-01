import TimersDashboard from './timer';

function App() {
  return (
    <>
    <button class="ui button absolute-top-left" onClick={window.history.back}>Go back</button>
    <TimersDashboard/>
    </>
  );
}

export default App;
