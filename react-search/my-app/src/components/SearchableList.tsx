type Props = {
  searchTerm: string;
};

export function SearchableList({ searchTerm }: Props) {
  const lostQuotes = [
    "Don't tell me what I can't do!",
    'Live together, die alone.',
    "If we can't live together, we're gonna die alone.",
    'See you in another life, brother.',
    "It's never been easy!",
    "I'm a complex guy, sweetheart.",
    'We have to go back, Kate. We have to go back!',
    'I have looked into the eye of this island, and what I saw was beautiful.',
    "Don't mistake coincidence for fate.",
    'You all, everybody!',
    'You have to lift it up.',
    'You guys got any milk?',
    'Everything happens for a reason.',
    "You're gonna have to take the boy.",
    'See you in another life.',
    'Why do you find it so hard to believe?',
    'Guys, where are we?',
    'You can let go now.',
    "We're not the only people on this island, and we all know it.",
    'The island is not done with you yet.',
  ];

  const results = lostQuotes.filter((quote) =>
    quote.toLowerCase().includes(searchTerm)
  );
  return (
    <ul className="pl-10">
      {results.length > 0 ? (
        results.map((quote, index) => (
          <li key={index} className="py-1 text-xl">
            {quote}
          </li>
        ))
      ) : (
        <p className="py-1 text-xl">No Matching Results</p>
      )}
    </ul>
  );
}
