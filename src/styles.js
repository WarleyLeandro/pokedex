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
  color: #fbfbfb;
`;

export const ItemStyled = styled.div`
  margin: 10px;
  padding: 4px;
  width: 250px;
  height: 250px;
  border-radius: 8px;
  border: 3px solid white;
  color: grey;
  background-color: white; // ${props => habitatColor.props};

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
  //rock: rgb(148, 81, 81),
  //ghost: rgb(247, 247, 247),
  //electric: rgb(255, 255, 161),
  bug: '#F6D6A7',
  poison: '#e0a7f6',
  normal: '#F4F4F4',
  //fairy: rgba(255, 192, 203, 0.863),
  fire: '#FBE3DF',
  grass: '#E2F9E1',
  water: '#E0F1FD'
};
