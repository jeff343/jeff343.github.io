import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { breakpoints as bp } from "../styles/breakpoints";

const Container = styled.section`
    margin: 20px auto 100px;
    max-width: 900px;
`;

const Title = styled.h2`
    font-size: 36px;
    text-align: left;
    margin-bottom: 50px;
    text-decoration: underline;
`;

const CardContainer = styled.div`
    max-width: 800px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 100px;

    @media screen and (max-width: ${bp.md}) {
        grid-template-columns: 1fr;
    }
`;

const projectObj = [
    {'id': 1},
    {'id': 2},
    {'id': 3},
    {'id': 4}
]


const ProjectDisplay = () => {

    return (
        <Container>
            <Title>Projects</Title>
            <CardContainer>
                {projectObj.map((project) => {
                    return <ProjectCard key={project.id} />
                })
                    }
            </CardContainer>
        </Container>
    )
};

export default ProjectDisplay;