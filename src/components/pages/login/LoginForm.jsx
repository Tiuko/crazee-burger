import {useState} from 'react';
import {Link} from 'react-router-dom';

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
				<Link to="/order">Vers OrderPage</Link>
			</form>
	);
};

export default LoginForm;