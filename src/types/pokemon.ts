export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: LabeledAPIResource[];
}

export interface LabeledAPIResource {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  types: PokemonType[];
  sprites: PokemonSprites;
  height: number;
  weight: number;
  abilities: PokemonAbility[];
}

export interface PokemonType {
  slot: number;
  type: LabeledAPIResource;
}

export interface PokemonSprites {
  other?: {
    "official-artwork"?: {
      front_default: string;
    };
  };
}

export interface PokemonAbility {
  ability: LabeledAPIResource;
  is_hidden: boolean;
  slot: number;
}
