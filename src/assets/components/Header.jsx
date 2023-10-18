import Nav from "./Nav";

function Header({ dati }) {
  return (
    <div className="header-container">
      <h1>Frontend Industries</h1>
      <Nav dati={dati} />
    </div>
  );
}

export default Header;
