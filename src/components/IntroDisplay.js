import styled from "styled-components";
import NameCard from "./NameCard";
import SkillsCard from "./SkillsCard";
// import mountainPic from "../assets/images/mountain-pic.jpg";
// import moonPic from "../assets/images/moon-pic.jpg";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    margin: auto;
    background-image: ${props => props.theme.bgimg};
    background-position: center;
    background-size: cover;
`;

const ContentWrapper = styled.section`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: auto;
`;

const IntroDisplay = () => {


    return (
        <Container>
            <ContentWrapper>
                <NameCard />
                <SkillsCard />
            </ContentWrapper>
        </Container>
    )
};

export default IntroDisplay;