import styled, { css } from "styled-components";
import { theme } from "../../../../../../theme/index.js";
import { MdDeleteForever } from "react-icons/md";
import PropTypes from 'prop-types';
import CasinoEffect from '../../../../../reusable-ui/CasinoEffect.jsx';

const BasketCard = ({
  title,
  quantity,
  imageSource,
  className,
  isClickable,
  onClick,
  onDelete,
  isSelected,
    price,
}) => {
  return (
    <BasketCardStyled
      className={className}
      $isClickable={isClickable}
      onClick={onClick}
      $isSelected={isSelected}
    >
      <div className="delete-button" onClick={onDelete}>
        <MdDeleteForever className="icon" />
      </div>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <div className="left-info">
          <div className="title">
            <span>{title}</span>
          </div>
          <span className="price">{price}</span>
        </div>
        <div className="quantity">
          <CasinoEffect count={`x ${quantity}`} />
        </div>
      </div>
    </BasketCardStyled>
  );
};

const BasketCardStyled = styled.div`
  cursor: ${({ $isClickable }) => ($isClickable ? "pointer" : "auto")};
  box-sizing: border-box;
  height: 86px;
  padding: 8px 16px;
  display: grid;
  grid-template-columns: 30% 1fr;

  border-radius: ${theme.borderRadius.round};
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.cardBasket};

  position: relative;

  .image {
    box-sizing: border-box;
    height: 70px;
    img {
      padding: 5px;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .text-info {
    user-select: none;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 70% 1fr;
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.primary};

    .left-info {
      display: grid;
      grid-template-rows: 60% 40%;
      margin-left: 21px;
      /* align-items: center; */
      .title {
        display: flex;
        align-items: center;
        font-family: ${theme.fonts.family.stylish};
        font-size: ${theme.fonts.size.P3};
        line-height: 32px;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        min-width: 0;
        span {
          overflow: hidden;
          /* width: 100%; */
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      .price {
        font-size: ${theme.fonts.size.SM};
        font-weight: ${theme.fonts.weights.medium};
        // font-family: ${theme.fonts.family.openSans};
        /* color: ${theme.colors.white}; */
      }
    }

    .quantity {
      box-sizing: border-box;
      font-weight: ${theme.fonts.weights.medium};
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 20px;
      font-size: ${theme.fonts.size.SM};
    }
  }

  .delete-button {
    display: none;
    z-index: 1;
  }

  &:hover {
    .delete-button {
      border: none;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 76px;
      border-top-right-radius: ${theme.borderRadius.round};
      border-bottom-right-radius: ${theme.borderRadius.round};
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.red};
      color: ${theme.colors.white};
      cursor: pointer;

      .icon {
        width: ${theme.fonts.size.P3};
        height: ${theme.fonts.size.P3};
      }

      /* behaviour on delete-button hover */
      &:hover {
        .icon {
          color: ${theme.colors.dark};
        }
        :active {
          .icon {
            color: ${theme.colors.white};
          }
        }
      }
    }
  }

  ${({ $isClickable, $isSelected }) =>
    $isClickable && $isSelected && selectedStyled}
`;

const selectedStyled = css`
  background: ${theme.colors.primary};
  .price,
  .quantity {
    color: ${theme.colors.white};
  }
`;

BasketCard.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  imageSource: PropTypes.string.isRequired,
  className: PropTypes.string,
  isClickable: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  price: PropTypes.string.isRequired,
};

export default BasketCard;
