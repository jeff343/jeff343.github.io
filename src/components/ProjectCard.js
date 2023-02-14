import styled from "styled-components";
import { useState } from "react";
import { ArrowRightSquareFill, ArrowLeftSquareFill } from "styled-icons/bootstrap";
import { breakpoints as bp } from "../styles/breakpoints";

const Container = styled.div`
    margin: auto;
    height: 300px;
    position: relative;
    width: 400px;

    @media screen and (max-width: ${bp.xs}) {
        width: 375px;
    }
`;

const Row = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
`;

const Card = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: ${props => props.showFront ? 'rotateY(0deg)' : 'rotateY(180deg)'};
    `;

const CardFront = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    overflow: hidden;
    border-radius: 10px;
    flex-direction: column;
    justify-content: start;
    box-shadow: 0 0 5px ${props => props.theme.secondary};
    background: ${props => props.theme.primary};
`;

const CardBack = styled(CardFront)`
    justify-content: start;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    padding: 20px;
`;

const CardImg = styled.img`
    width: 400px;
    height: auto;
`;

const Title = styled.h3`
    font-size: 24px;
    text-align: left;
`;

const FrontTitle = styled(Title)`
    margin: 10px 20px 25px;
`;

const Text = styled.p`
    font-size: ${props => props.size === 'small' ? '12px' : '16px'};
    margin: 10px 5px;
`;

const LinkContainer = styled.div`
    display: flex;
    width: 90%;
    justify-content: ${props => props.start || 'end'};
    position: absolute;
    bottom: 10px;
`;

const LinkButton = styled.button`
    width: 50px;
    height: 25px;
    border: none;
    border-radius: 5px;
    background: ${props => props.theme.color};
    color: ${props => props.theme.background};
    margin: auto 15px;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transition: background 0.5s;
        background: ${props => props.theme.tertiary};
    }
`;

const RightIcon = styled(ArrowRightSquareFill)`
    height: 30px;
    position: absolute;
    right: 5px;
    bottom: 5px;
    cursor: pointer;
`;

const LeftIcon = styled(ArrowLeftSquareFill)`
    height: 30px;
    position: absolute;
    bottom: 5px;
    left: 5px;
    cursor: pointer;
`;

// TODO update poke live site when pushed
const ProjectCard = ({ project }) => {
    const [showFront, setShowFront] = useState(true);
    const {img, title, build, description, code, live} = project;

    const flipCard = () => {
        setShowFront(!showFront);
    };

    return (
        <Container>
            <Card showFront={showFront}>
                <CardFront>
                    <CardImg src={img} alt='project' />
                    <FrontTitle>{title}</FrontTitle>
                    <RightIcon onClick={() => flipCard()} />
                    <LinkContainer start='start'>
                        <LinkButton as="a" href={live} target="_blank">live</LinkButton>
                        <LinkButton as="a" href={code} target="_blank">code</LinkButton>
                    </LinkContainer>
                </CardFront>
                <CardBack>
                    <Title>{title}</Title>
                    <Row>
                        <Text size='small'>
                            built with:
                        </Text>
                        {build.map((b) => {
                            return <Text size='small' key={b}>{b}</Text>
                        })}
                    </Row>
                    <Text>{description}</Text>
                    <LinkContainer>
                        <LinkButton as="a" href={live} target="_blank">live</LinkButton>
                        <LinkButton as="a" href={code} target="_blank">code</LinkButton>
                    </LinkContainer>
                    <LeftIcon onClick={() => flipCard()} />
                </CardBack>
            </Card>
        </Container>
    )
};

export default ProjectCard;