import styled from "styled-components";
import { useState } from "react";
import { animated, useSpring, useSpringRef } from "@react-spring/web";
import {
    Moon,
    MoonStarsFill,
    Sun,
    SunFill
} from "@styled-icons/bootstrap";
import { ToggleIcon } from "../styles/IconStyle";

const Container = styled.div`
    height: 30px;
    width: auto;
    background: ${props => props.theme.primary};
    border-radius: 10px;
    position: relative;
    margin: auto 30px;
    padding: 2px;
`;

const SwitchButton = styled.button`
    background: transparent;
    width: 50px;
    height: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    padding: 2px;

    & * {
        z-index: 1;
    }
`;

const BtnOverlay = styled(animated.div)`
    height: 26px;
    background-color: ${props => props.theme.secondary};
    position: absolute;
    top: 2px;
    border-radius: 10px;
`;


const ThemeSwitcher = ({ toggleTheme, current }) => {
    const api = useSpringRef();
    const [ forward, setForward ] = useState(true)

    const springs = useSpring({
        ref: api,
        from: { 
            width: 40,
            left: 2,
            right: 'unset'
        }
    })

    const handleEnter = () => {
        api.start({
            to: {
                width: 50
            },
            config: { duration: 300 }
        })
    }

    const handleLeave = () => {
        api.start({
            to: {
                width: 40
            },
            config: { duration: 300 }
        })
    }

    const handleClick = () => {
        if (forward) {
            api.start({
                to: [
                    {
                        width: 100,
                    },
                    {
                        left: 'unset',
                        right: 2
                    },
                    {
                        width: 40
                    }
            ],
            config: { duration: 200 }
            })
        } else {
            api.start({
                to: [
                    {
                        width: 100,
                    },
                    {
                        left: 2,
                        right: 'unset'
                    },
                    {
                        width: 40
                    }
            ],
            config: { duration: 200 }
            })
        }
        toggleTheme();
        setForward(!forward);
    }


    return (
        <Container>
            <SwitchButton
                disabled={forward}
                onMouseEnter={() => handleEnter()} 
                onMouseLeave={()=>handleLeave()}
                onClick={()=>handleClick()}
            >
                <ToggleIcon>
                    {current === 'light' ? <SunFill /> : <Sun />}
                </ToggleIcon>
            </SwitchButton>
            <SwitchButton 
                disabled={!forward}
                onMouseEnter={() => handleEnter()} 
                onMouseLeave={()=>handleLeave()}
                onClick={()=>handleClick()}
            >
                <ToggleIcon>
                    {current === 'light' ?  <Moon /> : <MoonStarsFill />}
                </ToggleIcon>
            </SwitchButton>
            <BtnOverlay  
                style={{...springs}}
            />
        </Container>
    )
};

export default ThemeSwitcher;