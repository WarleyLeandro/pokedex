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
  flex-direction: column;
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
  background-color: #fbfbfb;
  color: gray;
`;

export const ItemStyled = styled.div`
  margin: 10px;
  padding: 4px;
  width: 250px;
  height: 250px;
  border-radius: 8px;
  border: 3px solid white;
  color: grey;
  background-color: ${props => habitatColor[props.type] || '#ffffff'};
  display: flex;
  justify-content: center;
`;

export const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ImgCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    max-width: 200px;
    max-height: 180px;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  `;

export const InfoCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: flex-end;
  flex-direction: column;
`;

const habitatColor = {
  bug: '#F6D6A7',
  electric: 'rgb(255, 255, 161)',
  fairy: 'rgba(255, 192, 203, 0.863)',
  fire: '#FBE3DF',
  fighting: '#F0FFF0',
  ghost: 'rgb(247, 247, 247)',
  grass: '#E2F9E1',
  ground: '#D2B48C',
  normal: '#F4F4F4',
  poison: '#E0A7F6',  
  psychic: '#DDA0DD',
  rock: '#DEB887',
  water: '#E0F1FD',
};
