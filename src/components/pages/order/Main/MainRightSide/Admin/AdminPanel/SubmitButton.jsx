import Button from "../../../../../../reusable-ui/Button.jsx";
import SubmitMessage from "./SubmitMessage.jsx";
import PropTypes from "prop-types";

function SubmitButton({ isSubmitted }) {
  return (
    <>
      <Button
        className="submit-button"
        label={"Ajouter un nouveau produit au menu"}
        version="success"
      />
      {isSubmitted && <SubmitMessage />}
    </>
  );
}
SubmitButton.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
};

export default SubmitButton;
