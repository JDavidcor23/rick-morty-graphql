import React from "react";
import { Section, Ul, Li, MainSection, Img } from "../styles/HomeStyled";

const CharacterInfo = ({ character, dateCharacter }) => {
  return (
    <MainSection>
      <figure>
        <Img src={character.image} alt="" />
      </figure>
      <Section>
        <h3>{character.name}</h3>
        <p>CHARACTER ID: {character.id}</p>
        <div>
          <Ul border="none">
            <Li size="1.2rem">Status: </Li>
            <Li size="1.2rem">{character.status}</Li>
          </Ul>
          <Ul border="1px solid gray">
            <Li size="1.2rem">Species: </Li>
            <Li size="1.2rem">{character.species}</Li>
          </Ul>
          <Ul border="1px solid gray">
            <Li size="1.2rem">Type: </Li>
            <Li size="1.2rem">{character.type}</Li>
          </Ul>
          <Ul border="1px solid gray">
            <Li size="1.2rem">Gender: </Li>
            <Li size="1.2rem">{character.gender}</Li>
          </Ul>
          <Ul border="1px solid gray">
            <Li size="1.2rem">Origin: </Li>
            <Li size="0.9rem">{character.origin.name}</Li>
          </Ul>
          <Ul border="1px solid gray">
            <Li size="1.2rem">Location: </Li>
            <Li size="0.9rem">{character.location.name}</Li>
          </Ul>
          <Ul border="none">
            <Li size="1.2rem">Created at: </Li>
            <Li size="1.2rem">{dateCharacter}</Li>
          </Ul>
        </div>
      </Section>
    </MainSection>
  );
};
export default CharacterInfo;
