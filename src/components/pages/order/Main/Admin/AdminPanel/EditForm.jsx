import styled from "styled-components";
import HintMessage from "./HintMessage.jsx";
import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import ImagePreview from "./ImagePreview.jsx";
import TextInput from "../../../../../reusable-ui/TextInput.jsx";
import { getInputTextsConfig } from "./inputTextConfig.jsx";
import { EMPTY_PRODUCT } from "../../../../../enums/product.js";

const EditForm = () => {
  const { productSelected } = useContext(OrderContext);
  const inputTexts = getInputTextsConfig(productSelected);
  const [productBeingEdited, setProductBeingEdited] = useState(EMPTY_PRODUCT);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductBeingEdited({ ...productBeingEdited, [name]: value });
  };
  return (
    <EditFormStyled>
      {productSelected.imageSource && productSelected.title && (
        <ImagePreview
          imageSource={productSelected.imageSource}
          title={productSelected.title}
        />
      )}
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
    </EditFormStyled>
  );
};

const EditFormStyled = styled.form`
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

export default EditForm;
