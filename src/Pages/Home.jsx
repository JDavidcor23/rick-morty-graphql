import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { getDateCharacter } from "../function/getDate";
import { generateId } from "../function/getId";
import { queryCharacter } from "../querys/querCharacter";
import CharacterInfo from "../components/CharacterInfo";
import History from "../components/History";
import Loader from "../components/Loader";
import { ButtonGet } from "../styles/HomeStyled";

const Home = () => {
  const [getCharacter, result] = useLazyQuery(queryCharacter);
  const [character, setCharacter] = useState(null);
  const [dateCharacter, setDateCharacter] = useState("");
  const [allCharacters, setAllCharacters] = useState([]);
  const showCharacter = () => {
    getCharacter({ variables: { characterID: generateId() } });
  };
  useEffect(() => {
    if (result.data) {
      setCharacter(result.data.character);
      setAllCharacters((prev) => [...prev, result.data.character]);
      setDateCharacter(getDateCharacter(result.data.character.created));
    }
  }, [result]);
  return (
    <main>
      {character ? (
        <CharacterInfo character={character} dateCharacter={dateCharacter} />
      ) : (
        <h2>No se ha cargado ningún personaje</h2>
      )}
      {result.loading ? (
        <ButtonGet display="flex" center="center">
          <Loader />
        </ButtonGet>
      ) : (
        <ButtonGet
          onClick={() => {
            showCharacter();
          }}
        >
          GENERATE
        </ButtonGet>
      )}
      {allCharacters.length > 0 && (
        <History allCharacters={allCharacters} setCharacter={setCharacter} setDateCharacter={setDateCharacter} />
      )}
    </main>
  );
};

export default Home;
