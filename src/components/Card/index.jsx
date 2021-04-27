import React from "react";
import { useHistory } from "react-router-dom";
import {
  ContainerCard,
  InfoCard,
  ImgCard,
  ItemCard,
} from "./styles";

const Card = ({ id, image, name, type }) => {
  let history = useHistory();

  function handleClick() {
    history.push(`/info/${id}`);
  }
  return (
    <ItemCard type={type} onClick={handleClick}>
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
      
    </ItemCard>
  );
};

export default Card;
