import Button from "./Button";

//MOVED TO ITS OWN FILE: Constants
// const secondaryButtons = [
//   "Mark all as complete",
//   "Mark all as incomplete",
//   "Reset to initial",
//   "Remove all items",
// ];

export default function ButtonGroup({
  handleResetToInitial,
  handleRemoveAllItems,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  return (
    <section className="button-group">
      <Button onClick={handleMarkAllAsComplete} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button onClick={handleMarkAllAsIncomplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={handleResetToInitial} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onClick={handleRemoveAllItems} buttonType="secondary">
        Remove all items
      </Button>
    </section>
  );
}
