import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    background: linear-gradient(to right, rgb(53, 92, 125), rgb(108, 91, 123), rgb(192, 108, 132));
    display: flex;
    color: white;
`;

export const ContainerCenter = styled(Container) `
    align-items: center;
    justify-content: center;
`;

export const ButtonStyled = styled.button `
border-radius: 3px;
border: 2px solid red;
`;


export const B = styled(ButtonStyled) `
background-color: blue;
`;