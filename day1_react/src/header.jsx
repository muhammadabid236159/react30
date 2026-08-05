import "./Header.css";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          My Website
        </a>

        <div className="navbar-nav">
          <a className="nav-link" href="#">Home</a>
          <a className="nav-link" href="#">About</a>
          <a className="nav-link" href="#">Contact</a>
          <a className="nav-link" href="#">Resume</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;