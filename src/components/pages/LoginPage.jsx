import {useState} from 'react';

const LoginPage = () => {
    // State
    const [inputValue, setInputValue] = useState("");

    // Comportements
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Bonjour ${inputValue}`)
        setInputValue("");
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    // Render
    return (
        <div>
            <h1>Bienvenue chez nous</h1>
            <br />
            <h2>Connectez-vous</h2>
            <form action="submit" onSubmit={handleSubmit}>
                <input
                    value={inputValue}
                    onChange={handleChange}
                    type="text"
                    placeholder="Entrer votre prénom.."
                    required
                />
                <button>Accéder à votre espace</button>
            </form>
        </div>
    )
}

export default LoginPage