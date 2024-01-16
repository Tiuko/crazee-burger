import { useContext } from "react";
import styled from "styled-components";
import { IMAGE_COMING_SOON } from "../../../../enums/product.js";
import BasketCard from "./BasketCard.jsx";
import OrderContext from "../../../../../context/OrderContext.jsx";
import { findObjectById } from "../../../../../utils/array.js";
import {checkIfProductIsClicked, formatPrice} from '../../../../../utils/maths.js';

const BasketProducts = () => {
    const {
        basket,
        isModeAdmin,
        handleDeleteBasketProduct,
        menu,
        handleProductSelected,
        productSelected,
    } = useContext(OrderContext)

  const handleOnDelete = (event, id) => {
    event.stopPropagation();
    handleDeleteBasketProduct(id);
  };

  return (
      <BasketProductsStyled>
          {basket.map((basketProduct) => {
              const menuProduct = findObjectById(basketProduct.id, menu)
              return (
                  <div className="basket-card" key={basketProduct.id}>
                      <BasketCard
                          {...menuProduct}
                          formattedPrice={formatPrice(menuProduct.price)}
                          imageSource={menuProduct.imageSource ? menuProduct.imageSource : IMAGE_COMING_SOON}
                          quantity={basketProduct.quantity}
                          onDelete={(event) => handleOnDelete(event, basketProduct.id)}
                          isClickable={isModeAdmin}
                          onClick={isModeAdmin ? () => handleProductSelected(basketProduct.id) : null}
                          isSelected={checkIfProductIsClicked(basketProduct.id, productSelected.id)}
                      />
                  </div>
              )
          })}
      </BasketProductsStyled>
  );
};

const BasketProductsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .basket-card {
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    //:first-child {
    //  margin-top: 10px;
    //}
    //:last-child {
    //  margin-bottom: 10px;
    //}
  }
`;

export default BasketProducts;
