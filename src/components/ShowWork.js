import styled from "styled-components";
import SlideShow from "./SlideShow";
import { useState } from "react";


const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
`;

const Circle = styled.div`
height: 200px;
width: 200px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 100%;
background: rgba(255, 255, 255, 0.5);
border 3px solid black;
border-right: none;
border-top: none;
cursor: pointer;
`;

const Title = styled.h2`
font-size: 16px;
`;

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
                <Title>show work</Title>
                {showSlides && <SlideShow />}
            </Circle>
        </Container>
    )
};

export default ShowWork;