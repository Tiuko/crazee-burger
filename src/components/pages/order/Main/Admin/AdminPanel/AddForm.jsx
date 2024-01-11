import OrderContext from "../../../../../../context/OrderContext.jsx";
import { useContext, useState } from "react";
import { EMPTY_PRODUCT } from "../../../../../enums/product.js";
import Form from "./Form.jsx";
import SubmitButton from "./SubmitButton.jsx";

const AddForm = () => {
  // States
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

  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <SubmitButton isSubmitted={isSubmitted} />
    </Form>
  );
};

export default AddForm;
