import pokemon from '../constants/Pokemon.js'

export default function poke(query, setpokeData, setShowDropdown) {
    const axios = require('axios');
    setpokeData(null)
    if (query && query.length > 3) {
    // Make a request for a user with a given ID

        if (pokemon.includes(query)) {
            axios.get('https://pokeapi.co/api/v2/pokemon/'+query)
            .then(function (response) {
                setpokeData(response)
                setShowDropdown(false)
            })
        }


    }

}