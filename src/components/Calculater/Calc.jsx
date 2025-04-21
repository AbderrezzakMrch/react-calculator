import React from "react";
import './Calc.css'


function Calculater() {


    return(

        <div className="container">
            <h1 className="title">Calculater in <span>React</span></h1>
            <div className="calc">
                <div className="row1">
                    <div className="box">7</div>
                    <div className="box">4</div>
                    <div className="box">1</div>
                    <div className="box">+/-</div>
                </div>
                <div className="row2">
                    <div className="box">8</div>
                    <div className="box">5</div>
                    <div className="box">2</div>
                    <div className="box">0</div>
                </div>
                <div className="row3">
                    <div className="box">9</div>
                    <div className="box">6</div>
                    <div className="box">3</div>
                    <div className="box">.</div>
                </div>
                <div className="row4">
                    <div className="box">/</div>
                    <div className="box">*</div>
                    <div className="box">-</div>
                    <div className="box">+</div>
                </div>
            </div>
        </div>
    );


}


export default Calculater;