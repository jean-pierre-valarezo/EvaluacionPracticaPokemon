// LISTA de Pokémon
export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    name: string;
    url: string;
  }>;
}

// DETALLE de Pokémon
export interface PokemonDetailResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;

  abilities: Array<{
    is_hidden: boolean;
    ability: {
      name: string;
      url: string;
    };
  }>;

  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;

  sprites: {
    front_default: string;
    [key: string]: any;
  };

  moves: Array<{
    move: {
      name: string;
    };
  }>;

  stats: Array<{
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }>;
}
