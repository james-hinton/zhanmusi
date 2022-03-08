export default function detectCountryUserIPIsFrom(setCountry) {
  const axios = require("axios");

  axios
    .get("https://ipapi.co/json/")
    .then(function (response) {
      var country = response.data.country_name;

      setCountry(country);      
    })
    .catch(function (error) {
      console.log(error);
    });
}
