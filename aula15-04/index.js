const {createApp} = Vue;

createApp({
    data(){
        return{
            pokemons: [],
            loading: true,
            searchText: '',
            nextPage: 1
        }
    },
    computed:{
        filteredPokemons(){
            return this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.searchText.toLowerCase()))
        }
    },
    created(){
        this.fetchPokemons();
        window.addEventListener('scroll', this.handleScrool)
    },
    destroyed(){
        this.removeEventListener('scroll', this.handleScrool)
    },
    methods:{
            async fetchPokemons(){
                try {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(this.nextPage - 1) * 60}&limit=60`)
                    const data = await response.json();
                    const pokemon_details_promises = data.results.map(async pokemon => this.fetch_pokemon_data(pokemon.url))
                    const pokemon_details = await Promise.all(pokemon_details_promises)
                    this.pokemons = [... this.pokemons, ... pokemon_details];
                    this.nextPage++;
                    this.loading = false;
                } catch (error){
                    console.error(error)
                }
            },
            async fetch_pokemon_data(url){
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    return {
                        id: data.id,
                        name: data.name,
                        weight: data.weight,
                        types: data.types,
                        sprite: data.sprites,
                        show_details: true,
                    }
                } catch (error){
                    console.error(error)
                }
            },
            getTypeClass(type){
                const typeClassMap = {
                    fire: 'fire',
                    grass: 'grass',
                    water: 'water',
                    bug: 'bug',
                    normal: 'normal',
                    poison: 'poison',
                    electric: 'electric',
                    fairy: 'fairy',
                    fighting: 'fighting',
                    ground: 'ground',
                    rock: 'rock',
                    ghost: 'ghost',
                    dragon: 'dragon',
                    ice: 'ice',
                    psychic: 'psychic',
                    steel: 'steel',
                    dark: 'dark',
                    flying: 'flying'
                }
                return typeClassMap[type] || ''
            },
            handleScrool(){
                const bottom_of_page = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight

                if(bottom_of_page && !this.loading){
                    this.loading = true;
                    this.fetchPokemons();
                }
            }
    }
}).mount("#app")