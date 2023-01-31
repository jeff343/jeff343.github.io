import styled from "styled-components";

const Container = styled.header`
    height: 50px;
    width: 100%;
    background: none;
    box-shadow: 0 0 5px 0 ${props => props.theme.tertiary};
`;

const Navbar = styled.nav`
    height: 100%;
    float: right;
    display: flex;
    align-items: center;
    margin-right: 20px;
`;

const NavLink = styled.a`
    font-size: 18px;
    text-align: left;
    margin: 15px;
    text-decoration: none;
    color: ${props => props.theme.color};
`;

const Header = () => {

    return (
        <Container>
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