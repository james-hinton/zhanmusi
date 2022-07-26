import pokemon from "../constants/Pokemon.js";

export default function poke(query, setpokeData, setShowDropdown) {
  const axios = require("axios");
  setpokeData(null);
  if (query && query.length > 3) {
    if (pokemon.includes(query.toLowerCase())) {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + query.toLowerCase())
        .then(function (response) {
          setpokeData(response);
          setShowDropdown(false);
        });
    }
  }
}
