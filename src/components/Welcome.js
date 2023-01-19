import React, { useState } from 'react'

export default function Welcome() {
    const [text, setText] = useState("");

    const handlePage = () => {
        // console.log("Handle Page is working");
        document.getElementById("head1").innerHTML = `Hey! ${text}`;
        document.getElementById("head3").innerHTML = "Welcome to Lovely Professional University.";
    }
    const handleChange = (event) => {
        setText(event.target.value);
    }
    return (
        <div>
            Enter your name <input type="text" placeholder='Enter your name' onChange={handleChange} value={text} />
            <button onClick={handlePage}>Login</button>
            <h1 id='head1'> </h1>
            <h3 id='head3'> </h3>

            Assignment done by Anupam Verma 12020330
        </div>
    )
}
