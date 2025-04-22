import React, { useState } from "react";
import './Calc.css'


function Calculater() {

const [input, setInput] = useState("")
const [result, setResult] = useState(0)
    const handleCalc = (value) => {
        if (value === '='){
            try{
                setResult(eval(input))
                setInput("")
            }catch{
                setResult("ERROR")
            }
        }else if (value === 'C') {
            setInput("")
            setResult(0)
        }else {
            setInput(input + value)
        }
    };
    return(
        <div className="container">
            <h1 className="title">Calculater in <span>React</span></h1>
            <div className="calculator">
                <div className="display">
                    <div className="input">{input}</div>
                    <div className="result">{result}</div>
                </div>
                <div className="buttons">
                    <button onClick={()=> handleCalc("7")}>7</button>
                    <button onClick={()=> handleCalc("8")}>8</button>
                    <button onClick={()=> handleCalc("9")}>9</button>
                    <button onClick={()=> handleCalc("/")}>/</button>

                    <button onClick={()=> handleCalc("4")}>4</button>
                    <button onClick={()=> handleCalc("5")}>5</button>
                    <button onClick={()=> handleCalc("6")}>6</button>
                    <button onClick={()=> handleCalc("*")}>*</button>

                    <button onClick={()=> handleCalc("1")}>1</button>
                    <button onClick={()=> handleCalc("2")}>2</button>
                    <button onClick={()=> handleCalc("3")}>3</button>
                    <button onClick={()=> handleCalc("-")}>-</button>

                    <button onClick={()=> handleCalc("0")}>0</button>
                    <button onClick={()=> handleCalc(".")}>.</button>
                    <button onClick={()=> handleCalc("=")}>=</button>
                    <button onClick={()=> handleCalc("+")}>+</button>

                    <button className="clear" onClick={()=> handleCalc("C")}>C</button>
                </div>
            </div>
        </div>
    );


}


export default Calculater;