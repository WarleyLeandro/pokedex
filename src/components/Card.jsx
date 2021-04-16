import React from "react";
import {ContainerCard, InfoCard} from '../styles';

const Card = ({id, image, name, type}) => {
  return (
    <ContainerCard>
      <div> # {id} </div>
      
        <img src={image} alt={name} />
      
      <InfoCard>
        <h3> {name}</h3>
        <span> Tipo: {type}</span>
      </InfoCard>
    </ContainerCard>
  );
};

export default Card;
