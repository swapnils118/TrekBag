import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

//MOVED TO ITS OWN FILE: Constants
// const secondaryButtons = [
//   "Mark all as complete",
//   "Mark all as incomplete",
//   "Reset to initial",
//   "Remove all items",
// ];

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  return (
    <section className="button-group">
      <Button onClick={markAllAsComplete} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button onClick={markAllAsIncomplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={resetToInitial} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onClick={removeAllItems} buttonType="secondary">
        Remove all items
      </Button>
    </section>
  );
}
