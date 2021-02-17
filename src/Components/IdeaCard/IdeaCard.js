import './IdeaCard.css';
import PropTypes from 'prop-types';
import star from '../../icons/star.svg';
import deleteButton from '../../icons/delete.svg';
import commentButton from '../../icons/comment.svg';

function IdeaCard(props) {
  return (
    <article className="IdeaCard">
      <header>
        <button><img src={star} /></button>
        <button><img src={deleteButton} /></button>
      </header>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
      <footer>
        <button><img src={commentButton} /></button>
        Comment
      </footer>
    </article>
  );
}

export default IdeaCard;

IdeaCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}
