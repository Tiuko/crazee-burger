import styled from "styled-components";
import BasketCard from "./BasketCard.jsx";
import { IMAGE_COMING_SOON } from "../../../../enums/product.js";
import PropTypes from 'prop-types';

const BasketProducts = ({ basket, isModeAdmin, handleDeleteBasketProduct }) => {
  const handleOnDelete = (id) => {
    handleDeleteBasketProduct(id);
  };

  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => (
        <div className="basket-card" key={basketProduct.id}>
          <BasketCard
            {...basketProduct}
            imageSource={
              basketProduct.imageSource
                ? basketProduct.imageSource
                : IMAGE_COMING_SOON
            }
            onDelete={() => handleOnDelete(basketProduct.id)}
            isModeAdmin={isModeAdmin}
          />
        </div>
      ))}
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

BasketProducts.propTypes = {
  basket: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string,
        price: PropTypes.number,
        quantity: PropTypes.number,
        imageSource: PropTypes.string,
      })
  ).isRequired,
  isModeAdmin: PropTypes.bool.isRequired,
  handleDeleteBasketProduct: PropTypes.func.isRequired,
};

export default BasketProducts;
