//MOVE TO ITS OWN FILE
// export const initialItems = [
//   { id: 1, name: "charger", packed: true },
//   { id: 2, name: "card", packed: false },
//   { id: 3, name: "laptop", packed: false },
// ];

export default function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}

      {/* <Items item={item1} />
      <Items item={item2}/>
      <Items item={item3}/> */}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" /> {item.name}
      </label>

      <button>❌</button>
    </li>
  );
}
