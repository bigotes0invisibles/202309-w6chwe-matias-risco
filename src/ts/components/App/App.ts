import type Pokemon from "../../Pokemon/Pokemon";
import Component from "../Component/Component.js";
import PokemonList from "../PokemonList/PokemonList.js";

class App extends Component {
  constructor(
    parentElement: HTMLElement,
    private readonly pokemonList: Pokemon[],
  ) {
    super(parentElement, "div", "App");
  }

  protected populate(): void {
    this.element.innerHTML = `
      <header>
        <h1>
          Pokemon
        </h1>
      </header>
      <main class="main-container">
      </main>
    `;
    const pokemonList = new PokemonList(this.element, this.pokemonList);
    pokemonList.render();
  }
}

export default App;
