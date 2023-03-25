import React, { useState } from "react";

export default function HookCounter4() {
  const [item, setItem] = useState([]);

  function addItems() {
    setItem([
      ...item,
      {
        id: item.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  }

  return (
    <div>
      <button onClick={addItems}>Add Items</button>
      <ul>
        {item.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}
