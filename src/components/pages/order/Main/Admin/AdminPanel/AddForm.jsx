import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import { useContext, useState } from "react";
import TextInput from "../../../../../reusable-ui/TextInput.jsx";
import Button from "../../../../../reusable-ui/Button.jsx";
import SubmitMessage from "./SubmitMessage.jsx";
import { EMPTY_PRODUCT } from "../../../../../../utils/helpers.js";
import ImagePreview from "./ImagePreview.jsx";
import { getInputTextsConfig } from "./inputTextConfig.jsx";

const AddForm = () => {
  // State
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Comportements
  const handleSubmit = (event) => {
    event.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };

    handleAdd(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);

    displaySuccessMessage();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const displaySuccessMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 2000);
  };

  const inputTexts = getInputTextsConfig(newProduct);

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            onChange={handleChange}
            version="minimalist"
          />
        ))}
      </div>
      <div className="submit">
        <Button
          className="submit-button"
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {isSubmitted && <SubmitMessage />}
      </div>
    </AddFormStyled>
  );
};

const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    grid-area: 1 / 2 / 4 / 3;

    display: grid;
    grid-row-gap: 8px;
  }

  .submit {
    grid-area: 4 / 2 / -1 / -1;
    display: flex;
    align-items: center;
    top: 3px;

    .submit-button {
      height: 100%;
    }
  }
`;

export default AddForm;
