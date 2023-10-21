import type Pokemon from "../../Pokemon/Pokemon";
import Component from "../Component/Component.js";
import PokemonCard from "../PokemonCard/PokemonCard.js";

class PokemonList extends Component {
  constructor(
    parentElement: HTMLElement,
    private readonly pokemons: Pokemon[],
  ) {
    super(parentElement, "ul", "grid");
  }

  protected populate(): void {
    this.pokemons.forEach((pokemon) => {
      const pokemonItem = document.createElement("li");
      this.element.appendChild(pokemonItem);
      const pokemonCard = new PokemonCard(pokemonItem, pokemon);
      pokemonCard.render();
    });
  }
}
export default PokemonList;
