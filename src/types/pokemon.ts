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
  stats: PokemonStat[];
  moves: PokemonMove[];
  species: LabeledAPIResource;
  held_items: PokemonHeldItem[];
  cries: PokemonCries;
  forms: LabeledAPIResource[];
}

export interface PokemonType {
  slot: number;
  type: LabeledAPIResource;
}

export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
  other?: {
    "official-artwork"?: {
      front_default: string;
      front_shiny?: string;
    };
    dream_world?: {
      front_default: string;
    };
    home?: {
      front_default: string;
      front_shiny?: string;
    };
  };
}

export interface PokemonAbility {
  ability: LabeledAPIResource;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonStat {
  stat: LabeledAPIResource;
  base_stat: number;
  effort: number;
}

export interface PokemonMove {
  move: LabeledAPIResource;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: LabeledAPIResource;
  version_group: LabeledAPIResource;
}

export interface PokemonHeldItem {
  item: LabeledAPIResource;
}

export interface PokemonCries {
  latest: string;
  legacy: string;
}
