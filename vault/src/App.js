import "./App.css";
import { useState } from "react";
import logo from './gear.jpeg';
let randomNum = Math.floor(Math.random() * 50) + 1;
// console.log(randomNum);
function App() {

    const [number, setNumber] = useState("");
    const [attempt, setAttempt] = useState(5);
    const [result, setResult] = useState("");
  
    const numberHandler = (event) => {
        setNumber(event.target.value);
    };
  
    const check = () => {
      
        if(number){
            if(randomNum > number){
            setResult('You guessed Lower');
            }
            else if(randomNum < number){
            setResult('You guessed Higher');
            }
            else if(randomNum===number){
            setResult('YAY! YOU saved your people!');
            }else{
                setResult('Dont try to run nor hide, YOU ARE CAUGHT');
                window.location.reload();
            }
        }
        setAttempt--;
    };

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
    
            {/* game div */}
    
            <div className="storyDiv">
              <h3>The Big Heist</h3>
              <p className="story">
               Garrett, a master thief who has been away from his hometown for a long time, returns to it, a place known only as The City of DJ. With rulers only filled with greed and corruption, Garret decided to save his people from tyranny. The game revolves around a mission to steal a treasure from the world's safest vault inside the Bank of The City of DJ. Garret the thief must guess the number that would open the randomly generated numbered vault. He is given an indication of how close his guess is to the correct number with a certain amount of attempts to save his people. 
             </p>
             <label className ="labelS" htmlFor='randomNum'>
                Guess the number between 1 to 50
              </label>
              <br/>
             <input 
                type='text'
                value={number}
                onChange={numberHandler}/>

              <button className="" onClick={check}>Guess</button>
              <p>{result}</p>
              <p>you have {attempt} attempts left</p>

            </div>
          </header>
        </div>
      );

        }

        export default App;