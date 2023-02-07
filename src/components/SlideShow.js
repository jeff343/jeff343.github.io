import styled from "styled-components";
import moonPic from "../assets/images/moon-pic.jpg";
import mountainPic from "../assets/images/mountain-pic.jpg";
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
    width: 200px;
    margin: auto;
    backgound-position: center;
    background-size: cover;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 5px ${props => props.theme.tertiary};
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
        leave: { opacity: 0.8},
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