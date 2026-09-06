# Pokemon Infographics

## What To Do ?

1. List Pokemons (GET /pokemon?id=<pokemon_id>)
2. Fight Pokemons (GET /fight?p1=<pokemon_id>&p2=<pokemon_id>)

Calculate Fight

```

baseScore =
    hp * 0.20
  + attack * 0.20
  + defense * 0.15
  + specialAttack * 0.20
  + specialDefense * 0.15
  + speed * 0.10;

Fire -> Grass = 2 //Advantage
Fire -> Water = 0.5 //Disadvantage

typeScore = Who is fighting what

  Final Score = baseScore * typeScore


  How it will work lets assume two pokemons
  1. Charizard 2. Pikachu

  calcualate base for charizard
  calculate type for charizard
  calculate final score for charizard


  calcualate base for pikachu
  calculate type for pikachu
  calculate final score for pikachu


  compare final score between charizard and pikachu
```
