import './IdeaCard.css';
import PropTypes from 'prop-types';
import star from '../../icons/star.svg';
import deleteButton from '../../icons/delete.svg';
import commentButton from '../../icons/comment.svg';

function IdeaCard(props) {
  return (
    <article className="IdeaCard">
      <header className="cardHeader">
        <button className='cardButton'><img src={star} /></button>
        <button className='cardButton'><img src={deleteButton} /></button>
      </header>
      <section className="cardBody">
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </section>
      <footer className="cardFooter">
        <button className='footerButton'><img src={commentButton} /></button>
        <h4>Comment</h4>
      </footer>
    </article>
  );
}

export default IdeaCard;

IdeaCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}
