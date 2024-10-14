// Pkmn to generate.
const pkmn = ['ditto', 'krokorok', 'bewear',
    'psyduck', 'manaphy', 'gengar',
    'grotle', 'rufflet', 'shelgon',
    'lechonk', 'delphox', 'absol',
];

// Fetch the pkmn from PokeAPI.
function fetchPkmn(name) {
    return fetch('https://pokeapi.co/api/v2/pokemon/' + name)
        .then(response => {
            return response.json();
        })
        .catch(error => {
            console.log("Failed to fetch " + name +
                 ": " + error);
        });
}

// Get img url and name, and add an id.
async function processPkmn(name) {
    try {
        const data = await fetchPkmn(name);
        return {
            name: data.name,
            img: data.sprites.front_default,
            id: crypto.randomUUID(),
        };
    } catch (error) {
        console.log("Failed to process " + name +
            ": " + error);
    }
}

// Get array of num_cards of pkmn.
export default async function getDatas() {
    try {
        const pkmn_datas = await Promise.all(
            pkmn.map(async (name) => {
                return await processPkmn(name);
            })
        );
        return pkmn_datas;

    } catch (error) {
        console.log("Failed to load array: " + error);
    }
}