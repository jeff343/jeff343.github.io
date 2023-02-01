import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: start;
`;
const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 10px;
    color: ${props => props.theme.tertiary}
`;

const Desc = styled.p`
    font-size: ${props => props.size === 'small' ? '12px' : '16px'};
    line-height: 2;
    color: ${props => props.theme.dark};
`;

const NameCard = () => {

    return (
        <Container>
            <Desc size='small'>hi, my name is</Desc>
            <Title>Jeff Celone</Title>
            <Desc>front end developer</Desc>
            {/* add link to prokject and get in touch */}
            <Desc size='small'>see my projects or get in touch</Desc>
        </Container>
    )
};

export default NameCard;