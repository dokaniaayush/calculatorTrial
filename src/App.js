import './App.css';
import {useState} from "react";

function App() {
  const [result, setResult] = useState("0");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }
  const clear = () => {
    setResult("");
  }
  const calculate = () => {
    try{
      setResult(eval(result).toString());
    }catch(err){
      setResult("Error");
    }
  }
  return (
    <>
      <div className = "container">
        <form>
          <input type="text" value={result}/>
        </form>
        {/* <h1>{result}</h1> */}
        
        <div className="keypad">
          <button className='highlight1' onClick={clear}>AC</button>
          <button className='highlight1' name="+/-" onClick={handleClick} >&plusmn;</button>
          <button className='highlight1' name="%" onClick={handleClick} >&#37;</button>
          <button className='highlight2' name="/" onClick={handleClick}>&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button className='highlight2' name="*" onClick={handleClick}>&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button className='highlight2' name="-" onClick={handleClick}>&ndash;</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button className='highlight2' name="+" onClick={handleClick}>+</button>
          <button name="0" onClick={handleClick} id="zero" style={{borderRadius:'70px'}}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button className='highlight2' onClick={calculate} >=</button>
        </div>
      </div>
    </>
  );
}

export default App;
