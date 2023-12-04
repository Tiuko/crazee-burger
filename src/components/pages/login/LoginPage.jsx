import LoginForm from './LoginForm.jsx';
import styled from 'styled-components'
import Logo from '../../reusable-ui/Logo.jsx';

const LoginPage = () => {


    // Render
    return (
        <LoginPageStyled>
            <div className="background-container"></div>
            <Logo />
            <LoginForm />
        </LoginPageStyled>
    )
}

const LoginPageStyled = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .background-container {
        content: "";
        background: url("/images/burger-and-fries-background.jpg") center / cover rgba(0, 0, 0, 0.7) fixed;
        background-blend-mode: darken;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`

export default LoginPage

