import styled from "styled-components";
import SkillsCard from "./SkillsCard";

const Container = styled.section`
    display:  flex;
    margin: 100px auto;
    justify-content: center;
`;

const Col = styled.div`
    width: auto;
    margin: auto 50px;
`;

const NameText = styled.h1`
    font-size: 60px;
    margin-bottom: 10px;
    color: ${props => props.theme.tertiary}
`;

const DescText = styled.p`
    font-size: ${props => props.size === 'small' ? '12px' : '16px'};
    line-height: 2;
    color: ${props => props.theme.secondary}
`;

const IntroDisplay = () => {


    return (
        <Container>
            <Col>
                <DescText size='small'>hi, my name is</DescText>
                <NameText>Jeff Celone</NameText>
                <DescText>front end developer</DescText>
                {/* add link to prokject and get in touch */}
                <DescText size='small'>see my projects or get in touch</DescText>
            </Col>
            <Col>
                <SkillsCard />
            </Col>
        </Container>
    )
};

export default IntroDisplay;