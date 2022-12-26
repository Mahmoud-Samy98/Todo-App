import { useState } from "react";
import TodoItems from "./components/TodoItems";
import AddItem from "./components/AddItem";

function App() {
  const [state, setState] = useState({
    items: [
      { id: 1, name: "Mahmoud", age: 24 },
      { id: 2, name: "Samy", age: 26 },
      { id: 3, name: "Ali", age: 32 },
    ],
  });

  // delete item from state
  const deleteItem = (id) => {
    // return all element ec=xcept the element that we want to delete
    let items = state.items.filter((item) => {
      return item.id !== id;
    });
    setState({ items });
  };

  // create new item and push it in state
  const addItems = (item) => {
    item.id = Math.random();
    let items = state.items;
    items.push(item);
    setState({ items });
  };

  return (
    <div className="App container">
      <h1 className="text-center">Todo List</h1>
      <TodoItems items={state.items} deleteItem={deleteItem} />
      <AddItem addItems={addItems} />
    </div>
  );
}

export default App;
