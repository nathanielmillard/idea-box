import './ControlBar.css';

function ControlBar() {
  return (
    <nav className="ControlBar">
      <h1>IdeaBox</h1>
      <div>
        <h2>Filter Starred Ideas</h2>
        <button> Show Starred Ideas </button>
      </div>
    </nav>
  );
}

export default ControlBar;
