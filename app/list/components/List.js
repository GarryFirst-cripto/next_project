'use client'

import { useState, useCallback } from 'react';
import ListItem from './ListItem';

const List = () => {
  const [items, setItems] = useState(
    Array.from({ length: 20 }, (_, i) => `Item ${i}`)
  );
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleClick = useCallback(id => {
    setSelectedItemId(id);
    console.log(`Item ${id} clicked`);
  }, []);

  console.log('List rendered');

  return (
    <div>
      {selectedItemId !== null && <p>Selected Item ID: {selectedItemId}</p>}
      {items.map((item, index) => (
        <ListItem key={index} id={index} onClick={handleClick} value={item} />
      ))}
    </div>
  );
};

export default List;