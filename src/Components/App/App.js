import './App.css';
import {Component} from 'react'
import ControlBar from '../ControlBar/ControlBar.js'
import IdeaForm from '../IdeaForm/IdeaForm.js'
import CardArea from '../CardArea/CardArea.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allIdeas: []
    }
  }
  addIdea = (idea) => {
    let ideas = this.state.allIdeas
    ideas.push(idea)
    this.setState({allIdeas: ideas})
  }
  render(){
    return (
      <div className="App">
      <ControlBar />
      <main>
        <IdeaForm addIdea={this.addIdea}/>
        <CardArea cards={this.state.allIdeas} />
      </main>
      </div>
    );
  }
}

export default App;
