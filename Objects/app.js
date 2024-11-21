const pokemonlist = [
    {game:"Red", generation: "1", mascot: "Charizard"},
    {game:"Blue", generation: "1", mascot: "Blastoise"},
    {game:"Yellow", generation: "1", mascot: "Pikachu"},
    {game:"Green", generation: "1", mascot: "Venusaur"},
    {game:"Gold", generation: "2", mascot: "Ho-Oh"},
    {game:"Silver", generation: "2", mascot: "Lugia"},
    {game:"Crystal", generation: "2", mascot: "Suicune"},
    {game:"Ruby", generation: "3", mascot: "Groudon"},
    {game:"Saphire", generation: "3", mascot: "Kyogre"},
    {game:"Emerald", generation: "3", mascot: "Rayquaza"},
    {game:"Diamond", generation: "4", mascot: "Dialga"},
    {game:"Pearl", generation: "4", mascot: "Palkia"},
    {game:"Platium", generation: "4", mascot: "Giratina"},
    {game:"Black", generation: "5", mascot: "Reshiram"},
    {game:"White", generation: "5", mascot: "Zekrom"},
    {game:"Black 2", generation: "5", mascot: "Kyurem Black"},
    {game:"White 2", generation: "5", mascot: "Kyurem White"},
    {game:"X", generation: "6", mascot: "Xerneas"},
    {game:"Y", generation: "6", mascot: "Yvaltal"},
    {game:"Sun", generation: "7", mascot: "Solgaleo"},
    {game:"Moon", generation: "7", mascot: "Lunala"},
    {game:"Ultra Sun", generation: "7", mascot: "Necrozma Dusk Mane"},
    {game:"Ultra Moon", generation: "7", mascot: "Necrozma Dawn Wings"},
    {game:"Sword", generation: "8", mascot: "Zamazenta"},
    {game:"Shield", generation: "8", mascot: "Zacian"},
];

const pokemonsection = document.getElementById('pokemon')
console.log(pokemonsection)

for(i=0;i < pokemonlist.length; i++) {
    const newpokemon = document.createElement(`tr`);
    newpokemon.innerHTML = `<td>${pokemonlist[i].game}</td><td>${pokemonlist[i].generation}</td><td>${pokemonlist[i].mascot}</td>`
    pokemonsection.appendChild(newpokemon);
}