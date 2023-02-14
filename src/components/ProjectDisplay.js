import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import ProjectCarousel from "./ProjectCarousel";
import { breakpoints as bp } from "../styles/breakpoints";
import { cardData } from "../assets/data/cardData";

const Container = styled.section`
    margin: 20px auto 100px;
    max-width: 900px;
`;

const Title = styled.h2`
    font-size: 36px;
    text-align: left;
    margin-bottom: 50px;

    @media screen and (max-width: ${bp.md}) {
        text-align: center;
    }
`;

const CardContainer = styled.div`
    width: auto;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 100px;

    @media screen and (max-width: ${bp.md}) {
        display: none;
    }
`;

const CarouselContainer = styled.div`
    display: none;

    @media screen and (max-width: ${bp.md}) {
        display: block;
    }
`;

const ProjectDisplay = () => {

    return (
        <Container>
            <Title>Projects</Title>
            <CardContainer>
                {cardData.map((project) => {
                        return <ProjectCard key={project.id} project={project} />
                    })
                }
            </CardContainer>
            <CarouselContainer>
                <ProjectCarousel projectData={cardData} />
            </CarouselContainer>
        </Container>
    )
};

export default ProjectDisplay;