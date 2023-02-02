import styled, { keyframes } from "styled-components";
import ThemeSwitcher from "./ThemeSwitcher";
import { useState, useEffect, useRef } from "react";
import { breakpoints as bp } from "../styles/breakpoints";
import { List } from "styled-icons/bootstrap";

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const Navbar = styled.nav`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 100%;
    background: none;
    box-shadow: 0 0 5px 0 ${props => props.theme.tertiary};
`;

const NavCollapse = styled.div`
    height: 100%;
    width: 100%;
    margin-right: 20px;
    display: flex;
    justify-content: end;
    overflow: hidden;

    @media screen and (max-width: ${bp.md}) {
        margin-right: 5px;
        display: ${props => props.menuOpen ? 'block' : 'none'};
        animation: 0.5s ${fadeIn} ease-out;
        position: absolute;
        right: 0px;
        top: 45px;
        background: white;
        width: 150px;
        height: auto;
        border-radius: 10px;
        z-index: 2;
    }
`;

const NavList = styled.ul`
    list-style-type: none;
`;

const NavItem = styled.li`
    float: left;
    font-size: 18px;
    text-align: left;
    margin: 15px;
    color: ${props => props.theme.tertiary};
    cursor: pointer;

    & a {
        text-decoration: none;
        color: ${props => props.theme.dark};
    }

    &:hover {
        border-bottom: 3px solid ${props => props.theme.tertiary};
    }

    @media screen and (max-width: ${bp.md}) {
        margin: 0;
        padding: 15px;
        height: 100%;
        width: 100%;

        &:hover {
            border: none;
            background: ${props => props.theme.secondary};
        }
    }
`;

const NavMenuIcon = styled(List)`
    display: none;
    height: 30px;
    margin-right: 5px;
    color: ${props => props.theme.dark};
    cursor: pointer;
    border-radius: 100%;

    &:hover {
        box-shadow: 0 0 5px ${props => props.theme.tertiary};
    }

    @media screen and (max-width: ${bp.md}) {
        display: block;
    }
`;

const NameDisplay = styled.h1`
    font-size: 24px;
    margin-left: 20px;
    color: ${props => props.theme.tertiary};

    @media screen and (max-width: ${bp.md}) {
        margin-right: auto;
    }
`;

const Header = ({ toggleTheme, current }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        const handleOutsideClicks = (event) => {
            if (menuOpen && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("click", handleOutsideClicks);
        return () => {
            document.removeEventListener("click", handleOutsideClicks)
        }
    }, [menuOpen])

    const menuToggle = () => {
        setMenuOpen(!menuOpen);
    };



    return (
        <Navbar>
            <NameDisplay>
                JC
            </NameDisplay>
            <NavCollapse menuOpen={menuOpen}>
                <NavList>
                    <NavItem><a href='/'>about</a></NavItem>
                    <NavItem><a href='/'>projects</a></NavItem>
                    <NavItem><a href='/'>contact</a></NavItem>
                </NavList>
            </NavCollapse>
            <ThemeSwitcher toggleTheme={toggleTheme} current={current} />
            <NavMenuIcon onClick={() => menuToggle()} ref={menuRef}/>
        </Navbar>
    )
};

export default Header;