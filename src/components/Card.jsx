import React from "react";
import { ContainerCard, InfoCard, ImgCard, ItemStyled } from "../styles";

const Card = ({ id, image, name, type }) => {
  return (
    <ItemStyled type>
      <ContainerCard>
        <div> # {id} </div>
        <ImgCard>
          <img src={image} alt={name} />
        </ImgCard>
        <InfoCard>
          <h3> {name}</h3>
          <span> Tipo: {type}</span>
        </InfoCard>
      </ContainerCard>
    </ItemStyled>
  );
};

export default Card;
