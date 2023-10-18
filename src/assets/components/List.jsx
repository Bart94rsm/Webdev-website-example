function List({ list }) {
  const { id, text } = list;
  return (
    <ul className="list">
      {list.map((item) => (
        <li key={item.id}>
          <a href="">{item.text}</a>
        </li>
      ))}
    </ul>
  );
}

export default List;
