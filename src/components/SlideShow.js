import styled from "styled-components";
import { slidesData } from "../assets/data/slidesData"; 
import { useTransition, animated } from "@react-spring/web";
import { useState } from "react";

const Container = styled.div`
    height: auto;
    width: auto;
    background: white;
    position: absolute;
    bottom: 75px;
    right: 250px;
    background: none;
`;

const ImgWrapper = styled(animated.div)`
    height: 300px;
    width: auto;
    margin: auto;
    backgound-position: center;
    background-size: cover;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 5px ${props => props.theme.tertiary};
`;

const StyledImg = styled.img`
    height: 300px;
    width: auto;
`



const SlideShow = () => {
    const [imgIdx, setImgIdx] = useState(0);

    const transitions = useTransition(imgIdx, {
        key: imgIdx,
        from: { 
                opacity: 0,
                height: 0
        },
        enter: { 
            opacity: 1,
            height: 300
        },
        leave: { 
            opacity: 1,
            height: 0, 
            delay: 2500
         },
        config: { duration: 500 },
        onRest: (_a, _b, item) => {
            if (imgIdx === item) { 
                setImgIdx(state => (state + 1) % slidesData.length);
            }
        },
        exitBeforeEnter: true,
    })
    
    

    return (
        <Container>
            {transitions((springs, i) => (
                <ImgWrapper 
                    style={{
                        ...springs
                    }} >
                        <StyledImg src={slidesData[i].img} />
                </ImgWrapper>
            ))}
        </Container>
    )
};

export default SlideShow;