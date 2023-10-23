import type Pokemon from "../../Pokemon/Pokemon.ts";
import Component from "../Component/Component.js";

class PokemonCard extends Component {
  constructor(
    fatherElement: HTMLElement,
    private pokemon: Pokemon,
  ) {
    super(fatherElement, "div", "pokemon-card");
  }

  public update(pokemon: Pokemon) {
    this.pokemon = pokemon;
  }

  protected populate(): void {
    this.element.innerHTML = `
      <img src="${this.pokemon.getUrlPicture()}" alt="es un pokemon">
      <span class="pokemon-card__text">${this.pokemon.pokemonName}</span>
    `;
  }
}

export default PokemonCard;
