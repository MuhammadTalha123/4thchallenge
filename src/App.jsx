import React from 'react';
import { add,sub, mul, div } from './Calc';

function App() {
    return(
        <>
    <ul>
      <li>The sum of 40 and 4 is {add(40,4)}</li>
      <li>The subtraction of 40 and 4 is {sub(40,4)}</li>
      <li>The division of 40 and 4 is {div(40,4)}</li>
      <li>The multiplication of 40 and 4 is {mul(40,4)}</li>
    </ul>
  </>
    );
}

export default App;
