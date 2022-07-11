import { useState } from "react";
import styled from "styled-components";
import { StringLiteralLike } from "typescript";

const Container = styled.div<CircleProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 100px;
    border: 2px solid ${props => props.borderColor};
`;

interface CircleProps {
    bgColor: string; //필수
    borderColor?: string; //옵션
    text?: string;
}

interface PlayerShape {
    name: string;
    age: number;
}

const sayHello = (playerObj: PlayerShape) => `Hello ${playerObj.name}. You're ${playerObj.age} years old.`;

sayHello({ name: "nico", age: 24 });

function Circle({ bgColor, borderColor, text = "디폴트 text 값" }: CircleProps) {
    const [value, setValue] = useState("");

    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
        {text}
        </Container>
    );
}

export default Circle;
