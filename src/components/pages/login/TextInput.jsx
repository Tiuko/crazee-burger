import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../../theme/index.js';

const TextInput = ({ onChange, Icon, ...extraProps }) => {
	return (
		<InputStyled>
			{Icon && Icon}
			<input onChange={onChange} type="text" {...extraProps} />
		</InputStyled>
	);
};

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .input-icon {
    font-size: 15px;
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};
  }

  input {
    border: none;
    font-size: 15px;
    color: ${theme.colors.dark};
  }

  input::placeholder {
    color: ${theme.colors.greyLight};
  }
`;

TextInput.propTypes = {
	onChange: PropTypes.func.isRequired,
	Icon: PropTypes.element,
};

export default TextInput;
