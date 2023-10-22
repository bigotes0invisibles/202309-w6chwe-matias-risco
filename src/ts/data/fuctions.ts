import Pokemon from "../Pokemon/Pokemon.js";
import { type PokemonApi } from "../type";

export const getDataApi = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

export const pokemonApiToData = (pokemonApi: PokemonApi) =>
  pokemonApi.results.map(
    (pokemoninfo): Pokemon => new Pokemon(pokemoninfo.name, pokemoninfo.url),
  );
