document.getElementById("load").addEventListener("click", loadPokemon);

async function loadPokemon() {
    const count = Number(document.getElementById("count").value);
    const category = document.getElementById("category").value;
    const container = document.getElementById("cards");

    container.innerHTML = "";

    if (!count || count <= 0) return;

    let fetched = [];

    //adding data to the fetched array
    for (let id = 1; id <= count; id++) {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
        const data = await response.json();
        fetched.push(data);
    }

    // Filter by type if category selected
    if (category) {
        fetched = fetched.filter(p =>
            p.types.some(t => t.type.name === category)
        );
    }
    
    // Render
    fetched.forEach(poke => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${poke.sprites.front_default}" />
            <h3>${poke.name}</h3>
            <p>Type: ${poke.types.map(t => t.type.name).join(", ")}</p>
        `;
        container.appendChild(card);
    });
}
