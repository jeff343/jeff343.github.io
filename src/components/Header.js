import styled from "styled-components";
import ThemeSwitcher from "./ThemeSwitcher";

const Container = styled.header`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 100%;
    background: none;
    box-shadow: 0 0 5px 0 ${props => props.theme.tertiary};
`;

const Navbar = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 20px;
`;

const NavLink = styled.a`
    font-size: 18px;
    text-align: left;
    margin: 15px;
    text-decoration: none;
    color: ${props => props.theme.tertiary};

    &:hover {
        border-bottom: 3px solid ${props => props.theme.tertiary};
    }
`;

const NameDisplay = styled.h1`
    font-size: 24px;
    float: left;
    margin-left: 20px;
    color: ${props => props.theme.tertiary};
`;

const Header = ({ toggleTheme, current }) => {

    return (
        <Container>
            <NameDisplay>
                JC
            </NameDisplay>
            <Navbar>
                <NavLink href='/'>about</NavLink>
                <NavLink href='/'>projects</NavLink>
                <NavLink href='/'>contact</NavLink>
            </Navbar>
            <ThemeSwitcher toggleTheme={toggleTheme} current={current} />
        </Container>
    )
};

export default Header;