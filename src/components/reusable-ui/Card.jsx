import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../theme/index.js";
import Button from "./Button.jsx";
import { TiDelete } from "react-icons/ti";

const Card = ({
  title,
  imageSource,
  leftDescription,
  hasDeleteButton,
  onDelete,
}) => {
  return (
    <CardStyled className="produit">
      {hasDeleteButton && (
        <button
          className="delete-button"
          aria-label="delete-button"
          onClick={onDelete}
        >
          <TiDelete className="icon" />
        </button>
      )}
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <div className="title">{title}</div>
        <div className="description">
          <div className="left-description">{leftDescription}</div>
          <div className="right-description">
            <Button className="primary-button" label={"Ajouter"} />
          </div>
        </div>
      </div>
    </CardStyled>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  leftDescription: PropTypes.string.isRequired,
  hasDeleteButton: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const CardStyled = styled.div`
  background: ${theme.colors.white};
  width: 240px;
  height: 300px;
  display: grid;
  grid-template-rows: 65% 1fr;
  box-sizing: border-box;
  padding: 0 20px 0 20px;
  box-shadow: -8px 8px 20px 0 rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  position: relative;

  .delete-button {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    color: ${theme.colors.primary};
    z-index: 2;
    padding: 0;
    border: none;
    background: none;

    .icon {
      height: 100%;
      width: 100%;
    }

    :hover {
      color: ${theme.colors.red};
    }
    :active {
      color: ${theme.colors.primary};
    }
  }

  .image {
    width: 100%;
    height: auto;
    margin-top: 30px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .text-info {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;

    .title {
      margin: auto 0;
      font-size: ${theme.fonts.size.P4};
      position: relative;
      bottom: 10px;
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.dark};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-family: "Amatic SC", cursive;
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .left-description {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.fonts.weights.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: ${theme.fonts.weights.medium};
        color: ${theme.colors.primary};
      }

      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.size.P1};

        .primary-button {
          font-size: ${theme.fonts.size.XS};
          cursor: pointer;
          padding: 12px;
        }
      }
    }
  }
`;

export default Card;
