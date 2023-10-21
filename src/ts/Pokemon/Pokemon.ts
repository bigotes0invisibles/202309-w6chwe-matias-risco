class Pokemon {
  private readonly image: string;

  constructor(
    private readonly pokemonName: string,
    pokemonUrl: string,
  ) {
    this.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonUrl.at(
      -2,
    )!}.png`;
  }

  public getUrlPicture(): string {
    return this.image;
  }
}

export default Pokemon;
