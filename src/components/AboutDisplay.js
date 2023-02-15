import styled from "styled-components";
import SkillsCard from "../components/SkillsCard";
import { breakpoints as bp } from "../styles/breakpoints";



const Container = styled.section`
    display: flex;
    width: 100%;
    max-width: 900px;
    margin: 150px auto;
    padding-bottom: 150px;
    justify-content: space-between;
    align-items: start;
    border-bottom: 3px solid ${props => props.theme.secondary};

    @media screen and (max-width: ${bp.md}) {
        flex-direction: column;
        align-items: center;
    }

    @media screen and (max-width: ${bp.xs}) {
        width: 90%;
    }
`;

const AboutMe = styled.div`
    max-width: 400px;
    text-align: left;

    @media screen and (max-width: ${bp.md}) {
        text-align: center;
        margin-bottom: 80px;
    }
`;

const Title = styled.h2`
    font-size: 36px;
    margin-bottom: 20px;
`;

const Text = styled.p`
    font-size: 16px;
`;

const AboutDisplay = () => {

    return(
        <Container id='about'>
            <AboutMe>
                <Title>About Me</Title>
                <Text>Hi, my name is Jeff Celone and I'm a front end web developer. As a recent graduate from the nuCamp Full Stack Bootcamp, I am looking for an opportunity to join a development team to continue my growth as a developer. I enjoy creating clean and responsive web applications, primarily working in React.</Text>
            </AboutMe>
            <SkillsCard />
        </Container>
    )
};

export default AboutDisplay;