import type Pokemon from "../../Pokemon/Pokemon.ts";
import Component from "../Component/Component.js";
import PokemonCard from "../PokemonCard/PokemonCard.js";

class PokemonList extends Component {
  private readonly children: unknown[];
  constructor(
    parentElement: HTMLElement,
    private readonly pokemons: Pokemon[],
  ) {
    super(parentElement, "ul", "grid");
    this.children = [];
  }

  public update(pokemons: Pokemon[]) {
    pokemons.forEach((pokemon, position) => {
      (this.children[position] as PokemonCard).update(pokemon);
      (this.children[position] as PokemonCard).render();
    });
  }

  protected populate(): void {
    this.pokemons.forEach((pokemon) => {
      const pokemonItem = document.createElement("li");
      this.element.appendChild(pokemonItem);
      const pokemonCard = new PokemonCard(pokemonItem, pokemon);
      pokemonCard.render();
      this.children.push(pokemonCard);
    });
  }
}
export default PokemonList;
