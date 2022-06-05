export default function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        AlloMovie
      </a>
      <button className="navbar-toggler">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Favoris
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
