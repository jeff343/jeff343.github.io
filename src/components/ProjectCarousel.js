import styled from "styled-components";
import { animated, useTransition } from "@react-spring/web";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import { ArrowRightCircle, ArrowLeftCircle } from "styled-icons/bootstrap";
import { breakpoints as bp } from "../styles/breakpoints";


const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    margin: auto;
    max-width: 600px;
    width: 90%;
    height: 100%;

    @media screen and (max-width: ${bp.xs}) {
        width: 375px;
        position: relative;
    }
`;

const CardWrapper = styled(animated.div)`
    height: auto;
    width: auto;
`;

const ArrowContainer = styled.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    @media screen and (max-width: ${bp.xs}) {
        position: absolute;
        left: ${props => props.left ? '0px' : '325px'};
        bottom: -50px;
        background: none;
        align-items: start;
    }
`;

const LeftArrow = styled(ArrowLeftCircle)`
    height: 40px; 
    cursor: pointer;
`;

const RightArrow = styled(ArrowRightCircle)`
    height: 40px;
    cursor: pointer;
`;



const ProjectCarousel = ({ projectData }) => {
    const [idx, setIdx] = useState(0);
    const [fromLeft, setFromLeft] = useState(true);

    const increment = () => {
        if (idx === (projectData.length - 1)) {
            setIdx(0);
        } else {
            setIdx(state => state + 1);
        };
        setFromLeft(true)
    };

    const decrement = () => {
        if (idx === 0 ) {
            setIdx(projectData.length - 1);
        } else {
            setIdx(state => state - 1);
        };
        setFromLeft(false);
    };

    const transitions = useTransition(idx, {
        key: idx,
        from: { 
            opacity: 0,
            x: (fromLeft) ? 100 : -100
        },
        enter: { 
            opacity: 1,
            x: 0
        },
        leave: { 
            opacity: 0,
            x: (fromLeft) ? -100 : 100

         },
        config: { duration: 500 },
        exitBeforeEnter: true,
    });

    return (


        <Container>
            <ArrowContainer left>
                <LeftArrow onClick={()=>decrement()} />
            </ArrowContainer>
            {transitions((springs, i) => (
                <CardWrapper 
                    style={{
                        ...springs
                    }} >
                        <ProjectCard  key={projectData[i].id} project={projectData[i]} />
                </CardWrapper>
            ))}
            <ArrowContainer>
                <RightArrow onClick={()=>increment()}/>
            </ArrowContainer>
        </Container>
    )
};

export default ProjectCarousel;