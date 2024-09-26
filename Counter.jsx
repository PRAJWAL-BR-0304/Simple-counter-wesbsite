// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './index.css'; // Make sure to create a corresponding CSS file for styling

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="counter-container" aria-label="Counter component">
            <p className="count-display" role="status">{count}</p>
            <div className="button-container">
                <button
                    className="counter-button"
                    onClick={decrement}
                    aria-label="Decrement"
                >
                    Decrement
                </button>
                <button
                    className="counter-button"
                    onClick={increment}
                    aria-label="Increment"
                >
                    Increment
                </button>
                <button
                    className="counter-button"
                    onClick={reset}
                    aria-label="Reset"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter;
