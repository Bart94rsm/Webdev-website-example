import Item from "./Item";

function Nav({ dati }) {
  return (
    <>
      <ul className="li-container">
        {dati.map((dato) => (
          <Item key={dato.id} dato={dato} />
        ))}
      </ul>
    </>
  );
}

export default Nav;
