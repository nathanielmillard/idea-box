import './IdeaCard.css';
import PropTypes from 'prop-types'

function IdeaCard() {
  return (
    <article className="IdeaCard">
    <header>
      <button><img src={} /></button>
      <button><img src={} /></button>
    </header>
      <h1>{this.props.title}</h1>
      <p>{this.props.body}</p>
    <footer>
      <button><img src={} /></button>
      Comment
    </footer>
    </article>
  );
}

export default IdeaCard;

IdeaCard.propTypes = {
  title = PropTypes.string.isRequired,
  body = PropTypes.string.isRequired,
}
