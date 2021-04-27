import styled from "styled-components";
import habitatColor from '../../data/habitatColor';

export const ContainerCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  gap: 8px;
`;

export const ItemCard = styled.div`
  margin: 10px;
  padding: 4px;
  width: 250px;
  height: 250px;
  border-radius: 8px;
  border: 3px solid white;
  color: grey;
  background-color: ${(props) => habitatColor[props.type] || "#ffffff"};
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const ImgCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    max-width: 180px;
    max-height: 150px;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: flex-end;
  flex-direction: column;
`;