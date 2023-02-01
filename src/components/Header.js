import styled from "styled-components";

const Container = styled.header`
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

const Header = () => {

    return (
        <Container>
            <NameDisplay>
                JC
            </NameDisplay>
            <Navbar>
                <NavLink href='/'>About</NavLink>
                <NavLink href='/'>Skills</NavLink>
                <NavLink href='/'>Projects</NavLink>
                <NavLink href='/'>Contact</NavLink>
            </Navbar>
        </Container>
    )
};

export default Header;