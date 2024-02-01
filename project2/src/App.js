import TimersDashboard from './timer';

function App() {

  const goBack = () => {
    window.helpers.goBack();
  };

  return (
    <>
    <button class="ui button absolute-top-left" onClick={goBack()}>Go back</button>
    <TimersDashboard/>
    </>
  );
}

export default App;
