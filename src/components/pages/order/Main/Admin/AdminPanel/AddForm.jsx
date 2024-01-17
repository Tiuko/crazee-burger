import OrderContext from "../../../../../../context/OrderContext.jsx";
import { useContext } from "react";
import { EMPTY_PRODUCT } from "../../../../../enums/product.js";
import Form from "./Form.jsx";
import SubmitButton from "./SubmitButton.jsx";
import { useSuccessMessage } from "../../../../../../hooks/useSuccessMessage.js";
import {replaceFrenchCommaWithDot} from '../../../../../../utils/maths.js';

const AddForm = () => {
  // States
  const { username, handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  const { isSubmitted, displaySuccessMessage } = useSuccessMessage();

  // Comportements
  const handleSubmit = (event) => {
    event.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
      price: replaceFrenchCommaWithDot(newProduct.price),
    };

    handleAdd(newProductToAdd, username);
    setNewProduct(EMPTY_PRODUCT);

    displaySuccessMessage();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <SubmitButton isSubmitted={isSubmitted} />
    </Form>
  );
};

export default AddForm;
