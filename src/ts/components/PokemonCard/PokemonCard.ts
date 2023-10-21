import type Pokemon from "../../Pokemon/Pokemon.js";
import Component from "../Component/Component.js";

class PokemonCard extends Component {
  constructor(
    parentElement: HTMLElement,
    private readonly pokemon: Pokemon,
  ) {
    super(parentElement, "div", "pokemon-card");
  }

  populate(): void {
    this.element.innerHTML = `
      <img src="${this.pokemon.getUrlPicture()}" alt="es un pokemon">
      <h2>${this.pokemon.pokemonName}</h2>
    `;
  }
}

export default PokemonCard;
