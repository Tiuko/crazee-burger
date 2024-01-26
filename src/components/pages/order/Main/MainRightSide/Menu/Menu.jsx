import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import { theme } from "../../../../../../theme/index.js";
import { formatPrice } from "../../../../../../utils/maths.js";
import Card from "../../../../../reusable-ui/Card.jsx";
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx";
import EmptyMenuClient from "./EmptyMenuClient.jsx";
import { checkIfProductIsClicked } from "./helper.js";
import {
  EMPTY_PRODUCT,
  IMAGE_COMING_SOON,
  IMAGE_NO_STOCK,
} from "../../../../../../enums/product.js";
import { isEmpty } from "../../../../../../utils/array.js";
import Loader from "./Loader.jsx";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { menuAnimation } from "../../../../../../theme/animation.js";
import { convertStringToBoolean } from "../../../../../../utils/string.js";
import RibbonAnimated, { ribbonAnimation } from "./RibbonAnimated.jsx";

const Menu = () => {
  const {
    username,
    menu,
    isModeAdmin,
    handleDelete,
    resetMenu,
    productSelected,
    setProductSelected,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
  } = useContext(OrderContext);

  const handleCardDelete = async (event, idProductToDelete) => {
    event.stopPropagation();
    handleDelete(idProductToDelete, username);
    handleDeleteBasketProduct(idProductToDelete, username);
    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT);
  };

  const handleAddButton = (event, idProductToAdd) => {
    event.stopPropagation();
    handleAddToBasket(idProductToAdd, username);
  };

  let cardContainerClassName = isModeAdmin
    ? "card-container is-hoverable"
    : "card-container";

  if (menu === undefined) return <Loader />;

  if (isEmpty(menu)) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={() => resetMenu(username)} />;
  }

  return (
    <TransitionGroup component={MenuStyled} className="menu">
      {menu.map(
        ({ id, title, imageSource, price, isAvailable, isPublicised }) => {
          return (
            <CSSTransition classNames={"menu-animation"} key={id} timeout={300}>
              <div className={cardContainerClassName}>
                {convertStringToBoolean(isPublicised) && <RibbonAnimated />}
                <Card
                  title={title}
                  imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
                  leftDescription={formatPrice(price)}
                  hasDeleteButton={isModeAdmin}
                  onDelete={(event) => handleCardDelete(event, id)}
                  onClick={isModeAdmin ? () => handleProductSelected(id) : null}
                  isHoverable={isModeAdmin}
                  isSelected={checkIfProductIsClicked(id, productSelected.id)}
                  onAdd={(event) => handleAddButton(event, id)}
                  overlapImageSource={IMAGE_NO_STOCK}
                  isOverlapImageVisible={
                  convertStringToBoolean(isAvailable) === false
                  }
                />
              </div>
            </CSSTransition>
          );
        },
      )}
    </TransitionGroup>
  );
};

const MenuStyled = styled.div`
  background: ${theme.colors.white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 3.75rem;
  padding: 3.125rem 3.125rem 9.375rem;
  justify-items: center;
  box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;

  ${menuAnimation}

  .card-container {
    position: relative;
    height: 330px;
    border-radius: ${theme.borderRadius.extraRound};

    &.is-hoverable {
      &:hover {
        transform: scale(1.05);
        transition: ease-out 0.4s;
      }
    }
  }

  .ribbon {
    z-index: 2;
  }
  ${ribbonAnimation}
`;

export default Menu;
