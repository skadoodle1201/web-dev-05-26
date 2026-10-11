import { useEffect, useState } from "react";
import "./App.css";

function PokemonCard({ name, url }) {
  const [showData, setShowData] = useState(false);
  // useEffect(() => {
  //   if (showData) {
  //     fetch(url);
  //   }
  // }, [showData]);
  return (
    <>
      <p
        onClick={() => {
          console.log("click", name, url);
        }}
      >
        {name}
      </p>
      <div style={{ display: showData ? "block" : "none" }}>{}</div>
    </>
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
    <>
      {pokemonList.map((pokemon, index) => {
        return (
          <PokemonCard name={pokemon.name} url={pokemon.url} key={index} />
        );
      })}
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
    </>
  );
}

export default App;
