//MOVED TO ITS OWN FILE
// export const initialItems = [
//   { id: 1, name: "charger", packed: true },
//   { id: 2, name: "card", packed: false },
//   { id: 3, name: "laptop", packed: false },
// ];
// import { initialItems } from "../lib/constants";

import EmptyView from "./EmptyView";

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}

      {items.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
          />
        );
      })}

      {/* <Items item={item1} />
      <Items item={item2}/>
      <Items item={item3}/> */}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => {
            onToggleItem(item.id);
          }}
          checked={item.packed}
          type="checkbox"
        />{" "}
        {item.name}
      </label>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
