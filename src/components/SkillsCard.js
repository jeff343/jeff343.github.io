import styled from "styled-components";
import { IconStyle } from "../styles/IconStyle";
import { 
    ReactLogo, 
    Html5, 
    Css3,
    Bootstrap,
} from "styled-icons/fa-brands";
import { Javascript, Mui } from "styled-icons/simple-icons";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 250px; 
    width: 350px;
    border-radius: 20px;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Title = styled.h2`
    font-size: 24px;
    text-align: center;
`;

const IconWrapper = styled.div`
    text-align: center;
`;

const Text = styled.p`
    font-size: 16px;
    font-weight: bold;
`;


const SkillsCard = () => {

    return (
        <Container>
            <Row>
                <Title>Skills</Title>
            </Row>
            <Row>
                <IconWrapper>
                    <IconStyle>
                        <Html5 />
                    </IconStyle>
                    <Text>HTML</Text>
                </IconWrapper>
                <IconWrapper>
                    <IconStyle>
                        <Css3 />
                    </IconStyle>
                    <Text>CSS</Text>
                </IconWrapper>
                <IconWrapper>
                    <IconStyle>
                        <Javascript />
                    </IconStyle>
                    <Text>JS</Text>
                </IconWrapper>
            </Row>
            <Row>
                <IconWrapper>
                    <IconStyle>
                        <ReactLogo />
                    </IconStyle>
                    <Text>React</Text>
                </IconWrapper>
                <IconWrapper>
                    <IconStyle>
                        <Bootstrap />
                    </IconStyle>
                    <Text>Bootstrap</Text>
                </IconWrapper>
                <IconWrapper>
                    <IconStyle>
                        <Mui />
                    </IconStyle>
                    <Text>MUI</Text>
                </IconWrapper>
            </Row>
        </Container>
    )
};

export default SkillsCard