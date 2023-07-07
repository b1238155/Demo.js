import React, { useState } from 'react';

function Demo() {
  const [name, setName] = useState('Balu');

  const updateName = () => {
    setName((prevName) => (prevName === 'Balu' ? 'Mahe' : 'Balu'));
  };

  return (
    <div id="demo">
      <h1>{name}</h1>
      <button onClick={updateName}>Update Name</button>
    </div>
  );
}

export default Demo;
