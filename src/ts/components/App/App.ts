import { getDataApi, pokemonApiToData } from "../../data/fuctions.js";
import { type PokemonApi } from "../../type";
import Button from "../Button/Button.js";
import Component from "../Component/Component.js";
import PokemonList from "../PokemonList/PokemonList.js";

class App extends Component {
  private nexturl: string;
  private previousurl: string;
  private readonly children: unknown[];
  constructor(
    parentElement: HTMLElement,
    private readonly pokemonUrlApi: string,
  ) {
    super(parentElement, "div", "App");
    this.children = [];
  }

  updateinfo = async (url: string) => {
    const data = await this.getpokemonApiData(url);
    (this.children as PokemonList[]).forEach((pokemonList) => {
      pokemonList.update(data);
    });
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
    this.children.push(pokemonList);
    this.setbuttons();
  }

  private async getpokemonApiData(url: string) {
    const pokemonApi = (await getDataApi(url)) as PokemonApi;
    this.nexturl = pokemonApi.next ? pokemonApi.next : url;
    this.previousurl = pokemonApi.previous ? pokemonApi.previous : url;
    return pokemonApiToData(pokemonApi);
  }

  private setbuttons() {
    const buttonNextMethod = async () => {
      await this.updateinfo(this.nexturl);
    };

    const buttonPreviosMethod = async () => {
      await this.updateinfo(this.previousurl);
    };

    buttonNextMethod.bind(this);
    buttonPreviosMethod.bind(this);

    const navigationBar = this.element.querySelector(".navigation-bar")!;

    const buttonNext = new Button(navigationBar as HTMLElement, "button", {
      method: buttonNextMethod,
      innerHtml: "Next",
    });

    const buttonPrevios = new Button(navigationBar as HTMLElement, "button", {
      method: buttonPreviosMethod,
      innerHtml: "Previos",
    });

    buttonNext.render();
    buttonPrevios.render();
  }
}

export default App;
