import {Link, useParams} from 'react-router-dom';

const OrderPage = () => {

	// State
	const { username} = useParams()

	// Render
	return (
		<div>
			<h1>Bonjour {username}</h1>
			<Link to="/"><button>Déconnexion</button></Link>
		</div>
	);
};

export default OrderPage;