import { getDataApi, pokemonApiToData } from "../../data/fuctions.js";
import { type PokemonApi } from "../../type";
import Component from "../Component/Component.js";
import PokemonList from "../PokemonList/PokemonList.js";

class App extends Component {
  private nexturl: string;
  private previousurl: string;
  constructor(
    parentElement: HTMLElement,
    private readonly pokemonUrlApi: string,
  ) {
    super(parentElement, "div", "App");
  }

  updateinfo = async (url: string) => {
    const data = this.getpokemonApiData(url);
    return data;
  };

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
    const pokemonData = await this.getpokemonApiData(this.pokemonUrlApi);
    const pokemonList = new PokemonList(this.element, pokemonData);
    pokemonList.render();
  }

  private async getpokemonApiData(url: string) {
    const pokemonApi = (await getDataApi(url)) as PokemonApi;
    this.nexturl = pokemonApi.next;
    this.previousurl = pokemonApi.previous;
    return pokemonApiToData(pokemonApi);
  }
}

export default App;
