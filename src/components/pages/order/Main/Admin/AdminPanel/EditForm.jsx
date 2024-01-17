import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import Form from "./Form.jsx";
import EditInfoMessage from "./EditInfoMessage.jsx";

const EditForm = () => {
  const { username, productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const productBeingUpdated = { ...productSelected, [name]: value };
    setProductSelected(productBeingUpdated);
    handleEdit(productBeingUpdated, username);
  };
  return (
    <Form product={productSelected} onChange={handleChange} ref={titleEditRef}>
      <EditInfoMessage />
    </Form>
  );
};

export default EditForm;
