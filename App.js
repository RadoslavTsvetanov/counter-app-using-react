import React from "react"

export default function App() {
    var count = 0
    const [counter,setValue] = React.useState(count)
    function decrease(){
        count--;
        setValue(counter - 1)
    }
    function increase(){
        count++;
        setValue(counter + 1)
    }
    return (
        <div className="counter">
            <button className="counter--minus" onClick = {decrease}>–</button>
            <div className="counter--count">
                <h1>{counter}</h1>
            </div>
            <button className="counter--plus" onClick = {increase}>+</button>
        </div>
    )
}

