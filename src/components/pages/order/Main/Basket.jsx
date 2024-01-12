import styled from "styled-components";

const Basket = () => {
  return (
    <BasketStyled>
      <div className="head">Head</div>
      <div className="body">Body</div>
      <div className="footer">Footer</div>
    </BasketStyled>
  );
};

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;

  .head {
    background: red;
  }

  .body {
    background: blue;
  }

  .footer {
    background: green;
  }
`;

export default Basket;
