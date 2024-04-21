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

    },
    created(){

    },
    destroyed(){

    },
    methods:{
            async fetchPokemons(){
                try {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(this.nextPage - 1) * 60}&limit=60`)
                    const data = await response.json();
                    const pokemon_details_promises = data.results.map(async pokemon => this.fetch_pokemon_data(pokemon.url))
                    console.log(pokemon_details_promises)
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
                        sprite: data.sprite,
                        show_details: false,
                    }
                } catch (error){
                    console.error(error)
                }
            }
    }
}).mount("#app")