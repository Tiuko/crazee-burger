import PropTypes from 'prop-types';
import styled from "styled-components";

const Product = ({ title, imageSource, price }) => {
    return (
        <ProductStyled>
            <div className="produit">
                <div className="image">
                    <img src={imageSource} alt={title} />
                </div>
                <div className="info-text">
                    <div className="description">
                        <div className="title">{title}</div>
                        <div className="price">{price}</div>
                        <button className="add-button">Ajouter</button>
                    </div>
                </div>
            </div>
        </ProductStyled>
    );
};

Product.propTypes = {
    title: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

const ProductStyled = styled.div`
`;

export default Product;
