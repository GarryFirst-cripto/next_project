import React from 'react';

const ListItem = React.memo(({ id, onClick, value }) => {
  console.log(`ListItem ${id} rendered`);

  return (
    <div className='list-item'>
      <p className='list-item-text'>{value}</p>      
      <button onClick={() => onClick(id)}>Click {id}</button>
    </div>
  );
});

export default ListItem;