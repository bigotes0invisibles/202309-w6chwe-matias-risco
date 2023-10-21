import Pokemon from "../Pokemon";

describe("Given the class Pokemon", () => {
  describe("When recives 'bulbasaur' 'https://pokeapi.co/api/v2/pokemon/1/'", () => {
    test("the function getUrlPicture it return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' ", () => {
      const expectedUrl =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";

      const pokemon = new Pokemon(
        "bulbasaur",
        "https://pokeapi.co/api/v2/pokemon/1/",
      );
      const actualUrl = pokemon.getUrlPicture();

      expect(actualUrl).toBe(expectedUrl);
    });
  });

  describe("When recives 'bulbasaur' 'https://pokeapi.co/api/v2/pokemon/100/'", () => {
    test("the function getUrlPicture it return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' ", () => {
      const expectedUrl =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png";

      const pokemon = new Pokemon(
        "bulbasaur",
        "https://pokeapi.co/api/v2/pokemon/100/",
      );
      const actualUrl = pokemon.getUrlPicture();

      expect(actualUrl).toBe(expectedUrl);
    });
  });

  describe("When recives 'bulbasaur' 'https://pokeapi.co/api/v2/pokemon/10011/'", () => {
    test("the function getUrlPicture it return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10011.png' ", () => {
      const expectedUrl =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10011.png";

      const pokemon = new Pokemon(
        "bulbasaur",
        "https://pokeapi.co/api/v2/pokemon/10011/",
      );
      const actualUrl = pokemon.getUrlPicture();

      expect(actualUrl).toBe(expectedUrl);
    });
  });
});
