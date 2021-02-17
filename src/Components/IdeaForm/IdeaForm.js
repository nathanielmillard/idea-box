import './IdeaForm.css';
import {Component} from 'react'

class IdeaForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      this.title = '',
      this.body = ''
    }
  }
  render(){
    return (
      <div className="IdeaForm">
        <form className='ideaForm'>
          <label>
            Title
            <input type='text'/>
          </label>
          <label>
            Body
            <textarea />
          </label>
          <button className='saveButton'> Save </button>
        </form>
        <form className='searchForm'>
          <input />
          <button className='searchButton'>
            <img />
          </button>
        </form>
      </div>
    );
  }
}

export default IdeaForm;
