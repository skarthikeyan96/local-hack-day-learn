import React, { useState } from "react";

const App = () => {
  const [listItem, setListItem] = useState("");
  const initialList: Array<string> = [];
  const [items, setItems] = useState(initialList);

  const addItem = () => {
    if(listItem.length === 0){
      alert('please enter the item')
      return;
    }
    setItems((oldArray) => [...oldArray, listItem]);
    setListItem("");
  };

  return (
    <div className="p-4">
      <h1 className="pb-3"> To do </h1>
      <div className="flex">
      <input
        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
        type="text"
        value={listItem}
        onChange={(e) => setListItem(e.target.value)}
      />
      <button className="inline-flex justify-center ml-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={addItem}> Add Item </button>
      </div>
     
      {items.map((item, index) => {
        return (
          <ul key={index}>
            <li> {item} </li>
          </ul>
        );
      })}
    </div>
  );
};

export default App;
