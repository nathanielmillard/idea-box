import './IdeaForm.css';
import {Component} from 'react'
import PropTypes from 'prop-types'

class IdeaForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    }
  }
  updateForm = (e) => {
    let type = e.target.className
    let value = e.target.value
    this.setState({[type]: value })
  }
  saveIdea = (e) => {
    e.preventDefault()
    this.props.addIdea({title: this.state.title, body: this.state.body})
    e.target.parentElement.reset()
  }
  render(){
    return (
      <div className="IdeaForm">
        <form className='ideaForm'>
          <label>
            Title
            <input
              className='title'
              type='text'
              onChange={this.updateForm}
              />
          </label>
          <label>
            Body
            <textarea
              className='body'
              onChange={this.updateForm}
              />
          </label>
          <button className='saveButton' type='submit' onClick={this.saveIdea}> Save </button>
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

IdeaForm.propTypes = {
  addIdea: PropTypes.func.isRequired
}
