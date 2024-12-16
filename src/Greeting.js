import React from 'react';

function Greeting({ name }) {
    return (
        <div>
            {name ? (
                <p>Thanks for introducing yourself, {name}!</p>
            ) : (
                <p>Please enter your name:</p>
            )}
        </div>
    );
}

export default Greeting;
