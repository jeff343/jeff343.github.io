import styled from "styled-components";
import { useState } from "react";
import { ArrowRightSquareFill, ArrowLeftSquareFill } from "styled-icons/bootstrap";


// background: ${props => props.theme.primary};
// background-image: url(${props => props.bgimg});
// backgound-position: center;
// background-size: contain;
// background-repeat: no-repeat;
// backface-visibility: hidden;
const Container = styled.article`
    margin: auto;
    height: 300px;
    position: relative;
    width: 400px;
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
    justify-content: space-between;
    background: ${props => props.theme.primary};
`;

const CardImg = styled.img`
    width: 400px;
    height: auto;
`;

const CardBack = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    position: absolute;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    background: ${props => props.theme.primary};
`;

const Title = styled.h3`
    font-size: 24px;
    text-align: left;
`;

const FrontTitle = styled(Title)`
    margin-left: 20px;
`;

const Text = styled.p`
    font-size: ${props => props.size === 'small' ? '12px' : '16px'};
    margin-top: 10px;
`;

const LinkContainer = styled.div`
    display: flex;
    width: 90%;
    justify-content: start;
`;

const LinkButton = styled.button`
    width: 50px;
    height: 30px;
    border: none;
    border-radius: 10px;
    background: ${props => props.theme.dark};
    margin: auto 15px;
    cursor: pointer;
`;

const RightIcon = styled(ArrowRightSquareFill)`
    height: 30px;
    position: absolute;
    right: 5px;
    bottom: 5px;
    color: white;
`;

const LeftIcon = styled(ArrowLeftSquareFill)`
    height: 30px;
    position: absolute;
    bottom: 5px;
    left: 5px;
`;

// will take a project object as props
const ProjectCard = ({ project }) => {
    const [showFront, setShowFront] = useState(true);
    const {img, title, build, description} = project;

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
                    <LinkContainer>
                        <LinkButton>live</LinkButton>
                        <LinkButton>code</LinkButton>
                    </LinkContainer>
                </CardFront>
                <CardBack>
                    <Title>{title}</Title>
                    <Text size='small'>
                        built with:
                    </Text>
                    {build.map((b) => {
                        return <span><Text size='small'>{b}</Text></span>
                    })}
                    <Text>{description}</Text>
                    <LinkContainer>
                        <LinkButton>live</LinkButton>
                        <LinkButton>code</LinkButton>
                    </LinkContainer>
                    <LeftIcon onClick={() => flipCard()} />
                </CardBack>
            </Card>
        </Container>
    )
};

export default ProjectCard;