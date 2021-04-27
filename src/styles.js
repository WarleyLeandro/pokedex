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
  justify-content: space-around;
  margin-bottom: 20px;
  @media (max-width: 720px) {
    flex-direction: column;
    padding-top: 20px;
    gap: 3px;
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
  color: gray;
`;

export const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SearchBar = styled.input`
  border: none;
  border-radius: 3px;
  text-decoration: none;
  height: 30px;
  padding-left: 8px;
  padding-right: 8px;
  color: gray;
`;
