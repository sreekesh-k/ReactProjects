import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    const increaseCounter = () => {
        setCount(count + 1)
    }
    const decreaseCounter = () => {
        setCount(count - 1)
    }
    const resetCounter = () => {
        setCount(0)
    }

    return (
        <div className="counter-container">
            <div className='container'>
                <p>{count}</p>
                <div className='buttons'>
                    <button onClick={decreaseCounter}>-</button>
                    <button onClick={resetCounter}>Reset</button>
                    <button onClick={increaseCounter}>+</button>
                </div>
            </div>
        </div>
    );
}

export default Counter