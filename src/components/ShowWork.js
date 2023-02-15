import styled from "styled-components";
import SlideShow from "./SlideShow";
import { Github } from "styled-icons/bootstrap";
import { breakpoints as bp } from "../styles/breakpoints";
import { useState } from "react";


const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;

@media screen and (max-width: ${bp.md}) {
    display: none;
}
`;

const Circle = styled.div`
height: 200px;
width: 200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 100%;
background: rgba(255, 255, 255, 0.5);
border 3px solid ${props => props.theme.color};
border-left: none;
border-top: none;
border-bottom: none;
`;

const Title = styled.h2`
font-size: 16px;
cursor: pointer;

& a {
    text-decoration: none;
    color: ${primary => primary.theme.color};
}
`;

const GHIcon = styled(Github)`
    height: 30px;
    color: ${props => props.theme.color};
    margin-top: 5px;
`

const ShowWork = () => {
    const [showSlides, setShowSlides] = useState(false);

    const handleMouseEnter = () => {
        setShowSlides(true);
    };

    const handleMouseLeave = () => {
        setShowSlides(false);
    };

    return (
        <Container>
            <Circle 
                onMouseEnter={()=>handleMouseEnter()}
                onMouseLeave={()=>handleMouseLeave()}    
            >
                <Title><a href='https://github.com/jeff343' target='_blank' rel='noreferrer'>see work</a></Title>
                {showSlides && <SlideShow />}
                <a href='https://github.com/jeff343' target='_blank' rel='noreferrer'><GHIcon /></a>
            </Circle>
        </Container>
    )
};

export default ShowWork;