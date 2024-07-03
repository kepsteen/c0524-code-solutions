interface Pokemon {
  name: string;
  number: string;
}

type Props = {
  pokedex: Pokemon[];
};

export function PokemonList({ pokedex }: Props) {
  const listItems = pokedex.map((pokemon) => {
    return <li>{pokemon.name}</li>;
  });
  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}
