import styled, { keyframes } from "styled-components";
import moonPic from "../assets/images/moon-pic.jpg";
import mountainPic from "../assets/images/mountain-pic.jpg";
import { useTransition, animated } from "@react-spring/web";
import { useState } from "react";

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const Container = styled.div`
    display: flex;
    justify-conent: center;
    align-items: center;
    height: 400px;
    width: 300px;
    background: white;
    position: absolute;
    left: -320px;
    top: -200px;
    border-radius: 10px;
    animation: 0.5s ${fadeIn} ease-out;
`;

const ImgWrapper = styled(animated.div)`
    height: 300px;
    width: 200px;
    margin: auto;
    backgound-position: center;
    background-size: cover;
`;

const imgArr = [
    {
        img: moonPic,
    },
    {
        img: mountainPic,
    }
]

const SlideShow = () => {
    const [imgIdx, setImgIdx] = useState(0);

    const transitions = useTransition(imgIdx, {
        key: imgIdx,
        from: { opacity: 0 },
        enter: { opacity: 1},
        leave: { opacity: 0},
        config: { duration: 3000 },
        onRest: (_a, _b, item) => {
            if (imgIdx === item) { 
                setImgIdx(state => (state + 1) % imgArr.length);
            }
        },
        exitBeforeEnter: true,
    })
    
    

    return (
        <Container>
            {transitions((springs, i) => (
                <ImgWrapper 
                    style={{
                        ...springs, 
                        backgroundImage: `url(${imgArr[i].img})`
                    }} />
            ))}
        </Container>
    )
};

export default SlideShow;