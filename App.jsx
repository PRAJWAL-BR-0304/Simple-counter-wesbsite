// App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Counter from './Counter';
import './index.css'; // Import global styles

function App() {
    return (
        <div className="container">
            <header>
                <h1>Simple Counter App</h1>
            </header>
            <main>
                <Counter />
            </main>
            <footer>
                <p>&copy; {new Date().getFullYear()} DAYANANDA SAGAR UNIVERSITY.</p>
                <a href="#">Privacy Policy</a>
            </footer>
        </div>
    );
}

export default App;
