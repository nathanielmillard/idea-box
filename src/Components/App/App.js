import './App.css';
import ControlBar from '../ControlBar/ControlBar.js'
import IdeaForm from '../IdeaForm/IdeaForm.js'
import CardArea from '../CardArea/CardArea.js'

function App() {
  return (
    <div className="App">
      <ControlBar />
      <IdeaForm />
      <CardArea />
    </div>
  );
}

export default App;
