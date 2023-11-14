import {Link} from 'react-router-dom';

const ErrorPage = () => {
	return (
		<div>
			<h1>ErrorPage</h1>
			<Link to="/"><button>Retourner vers la page d'accueil</button></Link>
		</div>
	);
};

export default ErrorPage;