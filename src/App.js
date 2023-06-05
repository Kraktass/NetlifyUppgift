import React, { useState } from 'react';
import { changeBackgroundColor } from '@kraktass/background-color-changer';
import transformToUpperCase from '@kraktass/text-transformer';

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const calculate = () => {
    const intA = parseInt(a);
    const intB = parseInt(b);
    console.log(`${intA + intB}`);
  };

  const changeBackgroundColorHandler = () => {
    changeBackgroundColor('red');
  };

  const text = "This text is made uppercase from an NPM package";
  const transformedText = transformToUpperCase(text);

  return (
    <div>
      <h1>{transformedText}</h1>
      <p>First number:</p>
      <input type="number" value={a} onChange={e => setA(e.target.value)} />
      <p>Second number:</p>
      <input type="number" value={b} onChange={e => setB(e.target.value)} />
      <p>
        <button onClick={calculate}>Calculate</button>
        <button id="colorChanger" onClick={changeBackgroundColorHandler}>
          Change background color
        </button>
      </p>
    </div>
  );
}

export default App;