import Pokemon from "./Pokemon/Pokemon.js";
import PokemonList from "./components/PokemonList/PokemonList.js";
import { getDataApi } from "./data/fuctions.js";
import { type PokemonApi } from "./type";

const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50";
const pokemonApi = (await getDataApi(url)) as PokemonApi;
const body = document.querySelector("body") as HTMLElement;

const pokemons = pokemonApi.results.map(
  (pokemoninfo): Pokemon => new Pokemon(pokemoninfo.name, pokemoninfo.url),
);

const pokemonList = new PokemonList(body, pokemons);

pokemonList.render();
