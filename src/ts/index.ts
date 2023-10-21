import Pokemon from "./Pokemon/Pokemon.js";
import App from "./components/App/App.js";
import { getDataApi } from "./data/fuctions.js";
import { type PokemonApi } from "./type";

const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";
const pokemonApi = (await getDataApi(url)) as PokemonApi;
const body = document.querySelector("body") as HTMLElement;

const pokemons = pokemonApi.results.map(
  (pokemoninfo): Pokemon => new Pokemon(pokemoninfo.name, pokemoninfo.url),
);

const app = new App(body, pokemons);
app.render();
