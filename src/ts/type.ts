export interface PokemonApi {
  count: number;
  next: string;
  previous: string;
  results: Array<{
    name: string;
    url: string;
  }>;
}

export interface PokemonInfo {
  name: string;
  url: string;
}
