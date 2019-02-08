
let url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=8c30a3d837c547b27a1507e1faf9f4ea&hash=25752090038406aa81c23ef594da2a2a"


function getCharacterFromApi() {

  let characterId = '1009718'; // wolverine


  console.log(url);
  $.getJSON(url, {
    characters: characterId
    })
    .done(function(data) {

      console.log(data);
    })
    .fail(function(err){

      console.log(err);
    });
};

getCharacterFromApi();
