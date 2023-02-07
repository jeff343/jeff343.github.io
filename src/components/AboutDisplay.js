import styled from "styled-components";
import SkillsCard from "../components/SkillsCard";
import { breakpoints as bp } from "../styles/breakpoints";



const Container = styled.section`
    display: flex;
    width: 100%;
    max-width: 900px;
    margin: 40px auto;
    justify-content: space-between;
    align-items: start;

    @media screen and (max-width: ${bp.md}) {
        flex-direction: column;
        align-items: center;
    }
`;

const AboutMe = styled.div`
    max-width: 400px;
    text-align: left;
`;

const Title = styled.h2`
    font-size: 36px;
    margin-bottom: 20px;
    
    @media screen and (max-width: ${bp.md}) {
        text-align: center;
    }
`;

const Text = styled.p`
    font-size: 16px;
`;


const AboutDisplay = () => {

    return(
        <Container>
            <AboutMe>
                <Title>About Me</Title>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu mollis mauris. Praesent porta pretium tempor. Praesent vitae mauris odio. Suspendisse vitae augue molestie, iaculis.</Text>
            </AboutMe>
            <SkillsCard />
        </Container>
    )
};

export default AboutDisplay;