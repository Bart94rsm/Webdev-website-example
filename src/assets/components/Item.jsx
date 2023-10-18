function Item({ dato }) {
  const { id, nome } = dato;
  return (
    <li>
      <a href="">{nome}</a>
    </li>
  );
}

export default Item;
