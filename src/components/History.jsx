import React from "react";
import { ThemeProvider } from "styled-components";
import {
  ListLi,
  ImgList,
  H4,
  ButtonView,
  DivOne,
  Contain,
  Input,
} from "../styles/StyledList";

const theme = {
  colors: {
    purple: "#8757e8",
    blue: "#5d6ce7",
    white: "#ffffff",
  },
};

const History = ({ allCharacters, setCharacter }) => {
  const [filterCharaters, setFilterCharaters] = React.useState("");
  const handleSearch = ({ target }) => {
    setFilterCharaters(target.value);
  };
  const CharactersInput = allCharacters.filter((character) => {
    return character.name
      .toLowerCase()
      .includes(filterCharaters.toLocaleLowerCase());
  });
  return (
    <ThemeProvider theme={theme}>
      <Contain>
        <h3>History</h3>
        <form>
          <Input
            type="search"
            onChange={handleSearch}
            placeholder="Search your character"
          />
        </form>
        <ul>
          {CharactersInput.map((character) => (
            <ListLi key={character.id}>
              <DivOne>
                <figure>
                  <ImgList src={character.image} alt={character.name} />
                </figure>
                <H4>{character.name}</H4>
              </DivOne>
              <div>
                <a href="#info">
                  <ButtonView onClick={() => setCharacter(character)}>
                    VIEW
                  </ButtonView>
                </a>
              </div>
            </ListLi>
          ))}
        </ul>
      </Contain>
    </ThemeProvider>
  );
};

export default History;
