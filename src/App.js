import { useState } from 'react';
import './App.css';

function App() {
  const [expression, setExpression] = useState('');
  const [answer, setAnswer] = useState('');
  const display = (symbol) => {
    setExpression((pre) => pre + symbol);
    if (expression[expression.length - 1] === '=') {
      if (/[1-9.]/.test(symbol)) {
        setExpression(answer + symbol);
      }
    }
  };
  const calculate = () => {
    setAnswer(eval(expression));
    setExpression((prev) => prev + ' =');
  };
  const allClear = () => {
    setExpression('');
    setAnswer('');
  };
  const clear = () => {
    setExpression((prev) =>
      prev
        .split('')
        .slice(0, prev.length - 1)
        .join('')
    );
    setAnswer('');
  };
  return (
    <>
      <div className='calculator-grid'>
        <div id='display'>
          <div className='previous-operand'>
            <input disabled type='text' value={expression}></input>
          </div>
          <div className='current-operand'>
            <div className='total'>{answer}</div>
          </div>
        </div>
        <button onClick={allClear} id='allClear'>
          AC
        </button>
        <button onClick={() => display('/')} id='divide'>
          /
        </button>
        <button onClick={() => display('x')} id='multiply'>
          x
        </button>
        <button onClick={() => display('1')} id='one'>
          1
        </button>
        <button onClick={() => display('2')} id='two'>
          2
        </button>
        <button onClick={() => display('3')} id='three'>
          3
        </button>
        <button onClick={() => display('-')} id='subtract'>
          -
        </button>
        <button onClick={() => display('4')} id='four'>
          4
        </button>
        <button onClick={() => display('5')} id='five'>
          5
        </button>
        <button onClick={() => display('6')} id='six'>
          6
        </button>
        <button onClick={() => display('+')} id='add'>
          +
        </button>
        <button onClick={() => display('7')} id='seven'>
          7
        </button>
        <button onClick={() => display('8')} id='eight'>
          8
        </button>
        <button onClick={() => display('9')} id='nine'>
          9
        </button>
        <button onClick={() => display('.')} id='decimal'>
          .
        </button>
        <button onClick={() => display('0')} id='zero'>
          0
        </button>
        <button onClick={clear} id='clear'>
          C
        </button>
        <button onClick={calculate} id='equals'>
          =
        </button>
      </div>
    </>
  );
}

export default App;
