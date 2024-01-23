import { useContext } from "react";
import styled from "styled-components";
import { IMAGE_COMING_SOON } from "../../../../../enums/product.js";
import BasketCard from "./BasketCard.jsx";
import OrderContext from "../../../../../context/OrderContext.jsx";
import { findObjectById } from "../../../../../utils/array.js";
import { checkIfProductIsClicked } from "../MainRightSide/Menu/helper.js";
import { formatPrice } from "../../../../../utils/maths.js";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {basketAnimation} from '../../../../../theme/animation.js';

const BasketProducts = () => {
  const {
    username,
    basket,
    isModeAdmin,
    handleDeleteBasketProduct,
    menu,
    handleProductSelected,
    productSelected,
  } = useContext(OrderContext);

  const handleOnDelete = (event, id) => {
    event.stopPropagation();
    handleDeleteBasketProduct(id, username);
  };

  return (
      <TransitionGroup component={BasketProductsStyled} className={"transition-group"}>
        {basket.map((basketProduct) => {
          const menuProduct = findObjectById(basketProduct.id, menu)
          return (
              <CSSTransition
                  appear={true}
                  classNames={"animation-basket"}
                  key={basketProduct.id}
                  timeout={300}
              >
                <div className="card-container">
                  <BasketCard
                      {...menuProduct}
                      formattedPrice={formatPrice(menuProduct.price)}
                      imageSource={menuProduct.imageSource ? menuProduct.imageSource : IMAGE_COMING_SOON}
                      quantity={basketProduct.quantity}
                      onDelete={(event) => handleOnDelete(event, basketProduct.id)}
                      isClickable={isModeAdmin}
                      onClick={isModeAdmin ? () => handleProductSelected(basketProduct.id) : null}
                      isSelected={checkIfProductIsClicked(basketProduct.id, productSelected.id)}
                      className={"card"}
                  />
                </div>
              </CSSTransition>
          )
        })}
      </TransitionGroup>
  );
};

const BasketProductsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  
  .card-container {
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
  
  ${basketAnimation}
`;

export default BasketProducts;
