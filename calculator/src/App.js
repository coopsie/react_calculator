import { useState } from 'react'
import { evaluate } from 'mathjs'
import './App.css';
import './fonts/digital-7.regular.ttf';
import './images/chalkboard.jpeg';

function App() {
  const nums = ["clear", "back", "", "/", 9, 8, 7, "*", 6, 5, 4, "-", 3, 2, 1, "+", ".", 0, ":)", "="]
  const [sum, setSum] = useState([0]) 

  const calculate = (num) => {

      if (num === "clear"){
        setSum([0])
      }
      else if (num === "back"){
        let undoSum = [...sum]
        if (undoSum.length > 1){
          undoSum.pop()
          setSum(undoSum)
        }
        else{
          setSum([0])
        }
      }
      else if (num === "="){
        let joinSum = sum.join("")
        let newSum = evaluate(joinSum)
        setSum(newSum)
      }
      else{
        let storedSum = [...sum, num]
        if(storedSum[0] === 0){
          storedSum.shift()
        }
        setSum(storedSum)
      }
  }

  return(
      <div className="calculator" >
        
        <div id="screen">{sum}</div>
        
        <div className="buttons">
          {nums.map((num, index) => (
                <button key={index} onClick={() => calculate(num)}>{num}</button>
            ))}
        </div>
      </div>
  )
}

export default App;