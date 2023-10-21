class Pokemon {
  private readonly image: string;

  constructor(
    public readonly pokemonName: string,
    pokemonUrl: string,
  ) {
    const imageId = Number(pokemonUrl.split("/").at(-2)!);

    this.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageId}.png`;
  }

  public getUrlPicture(): string {
    return this.image;
  }
}

export default Pokemon;
