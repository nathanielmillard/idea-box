import './CardArea.css';
import PropTypes from 'prop-types';
import IdeaCard from '../IdeaCard/IdeaCard.js'

function CardArea(props) {
  let cards
  if(props.cards){
    cards = props.cards.map(idea => {
      console.log(idea)
      return <IdeaCard title={idea.title} body={idea.body}/>
    })
  }
  return (
    <div className="CardArea">
      {!cards ? <h1>No saved ideas</h1> : cards}
    </div>
  );
}

export default CardArea;

PropTypes.propTypes = {
  cards: PropTypes.arr
}
