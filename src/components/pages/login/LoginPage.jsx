import LoginForm from './LoginForm.jsx';
import styled from 'styled-components'
import Logo from '../../reusable-ui/Logo.jsx';

const LoginPage = () => {


    // Render
    return (
        <LoginPageStyled>
            <Logo />
            <LoginForm />
        </LoginPageStyled>
    )
}

const LoginPageStyled = styled.div`
    background: green;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default LoginPage

