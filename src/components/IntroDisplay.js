import styled from "styled-components";
import NameCard from "./NameCard";
import SkillsCard from "./SkillsCard";
import { breakpoints as bp } from "../styles/breakpoints";

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

    @media screen and (max-width: ${bp.md}) {
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
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