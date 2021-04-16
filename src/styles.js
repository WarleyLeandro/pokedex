import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(
    to right,
    rgb(53, 92, 125),
    rgb(108, 91, 123),
    rgb(192, 108, 132)
  );
  display: flex;
  color: white;
`;

export const ContainerCenter = styled(Container)`
  align-items: center;
  justify-content: center;
`;

export const Header = styled(Container)`
  height: 80px;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyled = styled.button`
  width: 120px;
  height: 50px;
  margin: 20px 0;
  border-radius: 6px;
  padding: 15px 32px;
  font-size: 12px;
  background-color: #f44336;
  color: #FBFBFB;
`;

export const B = styled(ButtonStyled)`
  background-color: blue;
`;

export const ItenStyled = styled.div`
  margin: 10px;
  padding: 4px;
  width: 250px;
  height: 250px;
  border-radius: 3px;
  border: 3px solid white;
  color: grey;
  background-color: white;

  display: flex;
  justify-content: center;
`;

export const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;


export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
   img {
     max-width: 200px;
   }
`;

export const InfoCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: flex-end;
  flex-direction: column;

`;