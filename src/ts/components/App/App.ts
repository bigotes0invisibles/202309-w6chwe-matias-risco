import Pokemon from "../../Pokemon/Pokemon.js";
import { getDataApi } from "../../data/fuctions.js";
import { type PokemonApi } from "../../type";
import Component from "../Component/Component.js";
import PokemonList from "../PokemonList/PokemonList.js";

class App extends Component {
  constructor(
    parentElement: HTMLElement,
    private readonly pokemonUrlApi: string,
  ) {
    super(parentElement, "div", "App");
  }

  protected async populate() {
    this.element.innerHTML = `
      <header>
        <h1>
          Pokemon
        </h1>
        <section class="navigation-bar">
        </section>
      </header>
      <main class="main-container">
      </main>
    `;
    const pokemonData = await this.getpokemonApiData();
    const pokemonList = new PokemonList(this.element, pokemonData);
    pokemonList.render();
  }

  private async getpokemonApiData(): Promise<Pokemon[]> {
    const pokemonApi = (await getDataApi(this.pokemonUrlApi)) as PokemonApi;
    return pokemonApi.results.map(
      (pokemoninfo): Pokemon => new Pokemon(pokemoninfo.name, pokemoninfo.url),
    );
  }
}

export default App;
