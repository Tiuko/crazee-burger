import {useState} from 'react';

const LoginForm = () => {
	// State
	const [inputValue, setInputValue] = useState("");

	// Behaviors
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
			<form action="submit" onSubmit={handleSubmit}>
				<h1>Bienvenue chez nous</h1>
				<br />
				<h2>Connectez-vous</h2>
				<input
					value={inputValue}
					onChange={handleChange}
					type="text"
					placeholder="Entrer votre prénom.."
					required
				/>
				<button>Accéder à votre espace</button>
			</form>
	);
};

export default LoginForm;