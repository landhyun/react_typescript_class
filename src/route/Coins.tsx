import styled from "styled-components";

const Title = styled.h1`
    color: ${props => props.theme.accentColor};
`;

function Coins() {
    return <Title>코인 살펴보기</Title>;
}
export default Coins