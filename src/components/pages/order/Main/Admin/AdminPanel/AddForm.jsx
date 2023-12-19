import styled from "styled-components";
import { theme } from "../../../../../../theme/index.js";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import { useContext, useState } from "react";

const EMPTY_PRODUCT = {
  id: "",
  title: "Bonbons",
  imageSource:
    "https://media.carrefour.fr/medias/16afeefb50193752bf365d84b2d6f3d7/p_1500x1500/03103220034804-c1n1-s03.jpg",
  price: 14,
};

const AddForm = () => {
  // State
  const { handleAdd } = useContext(OrderContext);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  // Comportements
  const handleSubmit = (event) => {
    event.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };

    handleAdd(newProductToAdd);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">Aucune image</div>
      <div className="input-fields">
        <input
          name="title"
          value={newProduct.title}
          type="text"
          placeholder="Nom"
          onChange={handleChange}
        />
        <input
          name="imageSource"
          value={newProduct.imageSource}
          type="text"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          name="price"
          value={newProduct.price ? newProduct.price : ""}
          type="text"
          placeholder="Prix"
          onChange={handleChange}
        />
      </div>
      <button className="submit-button">Submit button</button>
    </AddFormStyled>
  );
};

const AddFormStyled = styled.form`
  border: 3px solid black;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;

  .image-preview {
    background: red;
    grid-area: 1 / 1 / 4 / 2;
  }

  .input-fields {
    background: blue;
    grid-area: 1 / 2 / 4 / 3;

    display: grid;
  }

  .submit-button {
    background: green;
    grid-area: 4 / 2 / -1 / -1;
    width: 50%;
  }
`;

export default AddForm;
