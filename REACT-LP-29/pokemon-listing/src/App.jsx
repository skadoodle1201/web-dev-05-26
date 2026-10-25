import { useEffect, useState } from "react";
import "./App.css";

function PokemonCard({ name, url }) {
  const [showData, setShowData] = useState(false);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const getPokemonData = async () => {
      const response = await fetch(url);
      const pokemonData = await response.json();
      setPokemon({
        image: pokemonData.sprites.front_default,
        name: pokemonData.name,
        weight: pokemonData.weight,
        height: pokemonData.height,
      });
    };
    if (showData) {
      getPokemonData();
    }
  }, [showData, url]);
  return (
    <article className={`pokemon-card${showData ? " is-expanded" : ""}`}>
      <button
        className="pokemon-card__toggle"
        type="button"
        aria-expanded={showData}
        onClick={() => {
          setShowData(!showData);
        }}
      >
        <span>{name}</span>
        <span className="pokemon-card__indicator" aria-hidden="true">{showData ? "−" : "+"}</span>
      </button>
      {showData && !pokemon && <p className="pokemon-card__loading" role="status">Loading Pokémon…</p>}
      {pokemon && showData && (
        <div className="pokemon-card__details">
          <div className="pokemon-card__image">
            <img src={pokemon.image} alt={pokemon.name} width="160" height="160" />
          </div>
          <dl className="pokemon-card__stats">
            <div><dt>Weight</dt><dd>{pokemon.weight / 10} <span>kg</span></dd></div>
            <div><dt>Height</dt><dd>{pokemon.height / 10} <span>m</span></dd></div>
          </dl>
        </div>
      )}
    </article>
  );
}

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  const [nextUrl, setNextUrl] = useState(null);
  const [previousUrl, setPreviousUrl] = useState(null);

  useEffect(() => {
    const getPokemonData = async () => {
      if (!url) {
        return;
      }
      const response = await fetch(url);
      const pokemonData = await response.json();
      setPokemonList(pokemonData.results);
      setNextUrl(pokemonData.next);
      setPreviousUrl(pokemonData.previous);
    };
    getPokemonData();
  }, [url]);

  return (
    <main className="pokedex">
      <header className="pokedex__header">
        <p className="pokedex__eyebrow">Pokémon directory</p>
        <h1>Meet your next favorite.</h1>
        <p>Pick a Pokémon to discover its details.</p>
      </header>
      <div className="pokemon-grid">
      {pokemonList.map((pokemon, index) => {
        return (
          <PokemonCard name={pokemon.name} url={pokemon.url} key={index} />
        );
      })}
      </div>
      <nav className="pagination" aria-label="Pokémon pages">
      <button
        disabled={!previousUrl}
        onClick={() => {
          setUrl(previousUrl);
        }}
      >
        Previous
      </button>
      <button
        disabled={!nextUrl}
        onClick={() => {
          setUrl(nextUrl);
        }}
      >
        Next
      </button>
      </nav>
    </main>
  );
}

export default App;
