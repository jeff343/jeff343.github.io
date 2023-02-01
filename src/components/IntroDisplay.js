import styled from "styled-components";
import NameCard from "./NameCard";
import SkillsCard from "./SkillsCard";
import mountainPic from "../assets/images/mountain-pic.jpg";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    margin: auto;
    background-image: linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.5)), url(${mountainPic});
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