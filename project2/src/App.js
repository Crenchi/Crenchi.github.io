/* eslint-disable no-restricted-globals */
import TimersDashboard from './timer';

function App() {
  return (
    <>
    <button class="ui button absolute-top-left" onClick={window.helpers.goBack()}>Go back</button>
    <TimersDashboard/>
    </>
  );
}

export default App;
