import styled from "styled-components";
import habitatColor from "../../data/habitatColor";

export const InfoContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: #fbfbfb;
  h2 {
    color: gray;
  }
`;

export const InfoPokemon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const InfoStyled = styled.div`
  margin: 10px;
  padding: 4px;
  width: 60%;
  height: 40%;
  border-radius: 8px;
  border: 2px solid white;
  color: grey;
  background-color: ${(props) => habitatColor[props.type] || "#ffffff"};
  display: flex;
  align-items: center;
  justify-content: space-around;
  h1,
  h2 {
    font-family: Comic Sans MS, Comic Sans, cursive;
  }
  @media (min-width: 720px) {
    h1 {
      display: none;
    }
    h2 {
      padding-bottom: 12px;
    }
  }

  @media (max-width: 720px) {
    flex-direction: column;
    width: 80%;
    height: 60%;
    h1 {
      order: -1;
    }
    h2 {
      display: none;
    }
  }
`;

export const InfoImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    max-width: 180px;
    max-height: 150px;
  }
`;

export const ButtonStyled = styled.button`
  width: 120px;
  height: 50px;
  margin: 20px 0;
  border-radius: 6px;
  padding: 15px 32px;
  font-size: 12px;
  border: 1px solid gray;
  background-color: ${(props) => habitatColor[props.type] || "#fbfbfb"};
  color: gray;
`;
