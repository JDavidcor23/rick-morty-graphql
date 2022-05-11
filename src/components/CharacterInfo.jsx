import React from "react";
import { Section, Ul, Li, MainSection, Img } from "../styles/HomeStyled";

const CharacterInfo = ({ character, dateCharacter }) => {
  return (
    <MainSection id="info">
      <figure>
        <Img src={character.image} alt="" />
      </figure>
      <Section>
        <h3>{character.name}</h3>
        <p>CHARACTER ID: {character.id}</p>
        <div>
          <Ul border="none">
            <Li>Status: </Li>
            <Li>{character.status}</Li>
          </Ul>
          <Ul border="1px solid gray">
            <Li>Species: </Li>
            <Li>{character.species}</Li>
          </Ul>
          <Ul border="1px solid gray">
            <Li>Type: </Li>
            <Li>{character.type}</Li>
          </Ul>
          <Ul border="1px solid gray">
            <Li>Gender: </Li>
            <Li>{character.gender}</Li>
          </Ul>
          <Ul border="1px solid gray">
            <Li>Origin: </Li>
            <Li size="0.9rem">{character.origin.name}</Li>
          </Ul>
          <Ul border="1px solid gray">
            <Li>Location: </Li>
            <Li size="0.9rem">{character.location.name}</Li>
          </Ul>
          <Ul border="none">
            <Li>Created at: </Li>
            <Li>{dateCharacter}</Li>
          </Ul>
        </div>
      </Section>
    </MainSection>
  );
};
export default CharacterInfo;
