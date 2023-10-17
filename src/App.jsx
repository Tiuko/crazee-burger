import './App.css'
import {useState} from "react";

function App() {

    const [prenom, setPrenom] = useState("Peter");
    const [count, setCount] = useState(1);

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <>
            <h1>Bonjour {prenom}</h1>
            <p>{count}</p>
            <button onClick={handleClick}>Incrémenter</button>
        </>
    )
}

export default App
