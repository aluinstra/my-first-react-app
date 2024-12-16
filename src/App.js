import React, { useState, useEffect } from 'react';
import './App.css';
import Greeting from './Greeting';

function App() {
    const [name, setName] = useState(''); 
    const [submittedName, setSubmittedName] = useState(''); 

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setSubmittedName(name); 
        setName(''); 
    };

    const handleReset = (e) => {
        if (e) {
            e.preventDefault(); // Prevent default behavior if the event exists
        }
        if (submittedName) {
        setName(''); 
        setSubmittedName('');
        } 
    };

    useEffect((e) => {
        const handleClick = () => {
            handleReset(e); 
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [submittedName]);

    
    return (
        <div>
            <p>Hello, to React!</p>
            <Greeting name={submittedName} /> {/* Pass submittedName as a prop */}
            {!submittedName && (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                />
                <button type="submit">Submit</button> {/* Submit button */}
            </form>
            )}
        </div>
    );
}

export default App;
