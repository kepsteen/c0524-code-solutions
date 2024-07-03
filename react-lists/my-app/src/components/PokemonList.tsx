interface Pokemon {
  name: string;
  number: string;
}

type Props = {
  pokedex: Pokemon[];
};

export function PokemonList({ pokedex }: Props) {
  const listItems = pokedex.map((pokemon, index) => {
    return <li key={index}>{pokemon.name}</li>;
  });
  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}
