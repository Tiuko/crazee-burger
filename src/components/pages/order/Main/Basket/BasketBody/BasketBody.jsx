import {isEmpty} from '../../../../../../utils/array.js';
import EmptyBasket from './EmptyBasket.jsx';
import BasketProducts from './BasketProducts.jsx';
import OrderContext from '../../../../../../context/OrderContext.jsx';
import {useContext} from 'react';

function BasketBody() {
	const { basket, menu } = useContext(OrderContext)
	return (
		<>
			{isEmpty(basket) ? <EmptyBasket isLoading={menu === undefined} /> : <BasketProducts />}

		</>
	);
}

export default BasketBody;