console.log(`I wanna be the very best
Like no one ever was
To catch them is my real test
To train them is my cause
I will travel across the land
Searching far and wide
Teach Pokémon to understand
The power that's inside
Pokémon (gotta catch 'em all), it's you and me
I know it's my destiny (Pokémon)
Oh, you're my best friend
In a world we must defend
Pokémon (gotta catch 'em all), a heart so true
Our courage will pull us through
You teach me and I'll teach you
Pokémon (gotta catch 'em all)
Gotta catch 'em all, yeah
Every challenge along the way
With courage I will face
I will battle every day
To claim my rightful place
Come with me, the time is right
There's no better team
Arm in arm, we'll win the fight
It's always been our dream
Pokémon (gotta catch 'em all), it's you and me
I know it's my destiny (Pokémon)
Oh, you're my best friend
In a world we must defend
Pokémon (gotta catch 'em all), a heart so true
Our courage will pull us through
You teach me and I'll teach you
Pokémon (gotta catch 'em all)
Gotta catch 'em all
Gotta catch 'em all
Gotta catch 'em all
Gotta catch 'em all
Yeah
Pokémon (gotta catch 'em all), it's you and me
I know it's my destiny (Pokémon)
Oh, you're my best friend
In a world we must defend
Pokémon (gotta catch 'em all), a heart so true
Our courage will pull us through
You teach me and I'll teach you
Pokémon (gotta catch 'em all)
Gotta catch 'em all, Pokémon`)

const container = document.querySelector('#container');

for (i = 0; i <= 1025; i++) {
    const newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    container.appendChild(newImg);
}
i = 10001
for (i = 10001; i <= 10277; i++) {
    const newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    container.appendChild(newImg);
}
i = 0
for (i = 0; i <= 1025; i++) {
    const newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png`
    container.appendChild(newImg);
}
i = 10001
for (i = 10001; i <= 10277; i++) {
    const newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png`
    container.appendChild(newImg);
}
i = 0
for (i = 0; i <= 1025; i++) {
    const newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${i}.png`
    container.appendChild(newImg);
}
i = 10001
for (i = 10001; i <= 10277; i++) {
    const newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${i}.png`
    container.appendChild(newImg);
}
i = 0
for (i = 0; i <= 1025; i++) {
    const newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny${i}.png`
    container.appendChild(newImg);
}
i = 10001
for (i = 10001; i <= 10277; i++) {
    const newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny${i}.png`
    container.appendChild(newImg);
}
i = 0
