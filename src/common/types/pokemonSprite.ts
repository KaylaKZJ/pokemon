export interface IPokemonSprite {
  back_default: string;
  back_female?: string | null;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string | null;
  front_shiny?: string;
  front_shiny_female?: string;
  back_gray?: string;
  back_transparent?: string;
  front_gray?: string;
  front_transparent?: string;
  back_shiny_transparent?: string;
  front_shiny_transparent?: string;
  animated?: IPokemonSprite;
  other: IOther;
}

interface IOther {
  dream_world: {
    front_default: string;
    front_female: string | null;
  };
  home: {
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
  };
  'official-artwork': {
    front_default: string;
    front_shiny: string;
  };
}
interface DreamWorld {
  front_default: string;
  front_female?: null;
}

interface Home extends IPokemonSprite {}

interface OfficialArtwork {
  front_default: string;
  front_shiny?: string;
}

interface GenerationSprites {
  [key: string]: IPokemonSprite;
}

interface PokemonImages {
  back_default: string;
  back_female?: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: {
    dream_world: DreamWorld;
    home: Home;
    'official-artwork': OfficialArtwork;
  };
  versions: {
    'generation-i': GenerationSprites;
    'generation-ii': GenerationSprites;
    'generation-iii': GenerationSprites;
    'generation-iv': GenerationSprites;
    'generation-v': GenerationSprites;
    'generation-vi': GenerationSprites;
    'generation-vii': {
      icons: {
        front_default: string;
        front_female?: null;
      };
      'ultra-sun-ultra-moon': IPokemonSprite;
    };
    'generation-viii': {
      icons: {
        front_default: string;
        front_female?: null;
      };
    };
  };
}
