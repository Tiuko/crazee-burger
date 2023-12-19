import styled from "styled-components";
import { theme } from "../../../../../../theme/index.js";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import { useContext, useState } from "react";

const AddForm = () => {
  // State
  const { handleAdd } = useContext(OrderContext);

  const [title, setTitle] = useState("");
  const [imageSource, setImageSource] = useState("");
  const [price, setPrice] = useState(0);

  // Comportements
  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      id: new Date().getTime(),
      title: title,
      imageSource: imageSource,
      price: price,
    };

    handleAdd(newProduct);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImageChange = (event) => {
    setImageSource(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">Aucune image</div>
      <div className="input-fields">
        <input
          value={title}
          type="text"
          placeholder="Nom"
          onChange={handleTitleChange}
        />
        <input
          value={imageSource}
          type="text"
          placeholder="Image URL"
          onChange={handleImageChange}
        />
        <input
          value={price ? price : ""}
          type="text"
          placeholder="Prix"
          onChange={handlePriceChange}
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
