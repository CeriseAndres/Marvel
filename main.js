let url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=8c30a3d837c547b27a1507e1faf9f4ea&hash=25752090038406aa81c23ef594da2a2a"
//const LIMIT = 16;

function getComicsFromApi(){

  let results = '';


  console.log(url);
  $.getJSON(url, {
    id: results
    })
    .done(function(data) {

      console.log(data);
    })
    .fail(function(err){

      console.log(err);
    });

};
getComicsFromApi();
function displayComics(comics) {

};

function displayPagination(total, LIMIT, offset) {

};

// $(document).ready(function() {
//   $("#slider").slider();
//   $("#search_bt").click(function(){
//     getComicsFromApi(LIMIT, offset:0);
//   });
// })
