import styled from "styled-components";
import {
    Moon,
    MoonStarsFill,
    Sun,
    SunFill
} from "@styled-icons/bootstrap";
import { ToggleIcon } from "../styles/IconStyle";

const Container = styled.div`
    width: 150px;
    display: flex;
    align-items: end;
    justify-content: center;
`;

const ButtonContainer = styled.div`
    width: 50px;
    height: 25px;
    position: relative;
    margin: auto 5px;
`;

const ThemeSwitchButton = styled.button`
    width: 100%;
    height: 100%;
    border-radius: 200px;
    border: none;
    cursor: pointer;
    background: ${props => props.theme.primary};
    box-shadow: 0 0 15px inset grey;
    transition: 0.3s;

    &:after {
        content: "";
        width: 20px;
        height: 20px;
        top: 5px;
        left: ${props => (props.current === 'light' ? '2px' : '48px') };
        transform: ${props => (props.current === 'light' ? 'none' : 'translateX(-100%)')};
        border-radius: 100%;
        position: absolute;
        background: ${props => props.theme.tertiary};
        box-shadow: 0 0 5px inset grey;
        transition: 0.3s;
    }
`;

const ThemeSwitcher = ({ toggleTheme, current }) => {

    return (
        <Container>
            <ToggleIcon>
                {current === 'light' ? <SunFill /> : <Sun />}
            </ToggleIcon>
            <ButtonContainer>
                <ThemeSwitchButton current={current} onClick={() => toggleTheme()} />
            </ButtonContainer>
            <ToggleIcon>
                {current === 'light' ? <Moon /> : <MoonStarsFill />}
            </ToggleIcon>
        </Container>
    )
};

export default ThemeSwitcher;