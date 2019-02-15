//let url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=8c30a3d837c547b27a1507e1faf9f4ea&hash=25752090038406aa81c23ef594da2a2a"

const PUBLIC_KEY = "8c30a3d837c547b27a1507e1faf9f4ea";
const TS = "1";
const HASH = "25752090038406aa81c23ef594da2a2a";

const LIMIT = 16;

function getComicsFromApi(LIMIT, offset){
  var urlAPI = "https://gateway.marvel.com:443/v1/public/comics?apikey="
    + PUBLIC_KEY + "&hash=" + HASH + "&ts=" + TS;

  $.getJSON(urlAPI)
    .done(function(json){
      displayComics(json.data.results);
    })
    .fail(function(err) {
      console.log(err);
    });
};


function displayComics(resultsLen) {
  $("#results").html("");
  for(let i=0; i<resultsLen.length; i ++){
    let imgComic = resultsLen[i].thumbnail.path +
      '/standard_medium.' + resultsLen[i].thumbnail.extension;
    let resultsLi = "<li class='results'><br>" + resultsLen[i].title + "</li>";
    resultsLi += "<img class='screen' src='" + imgComic + "'>";
    resultsLi += "<span class='title'>" + resultsLen[i].title + "</span>";
    resultsLi += "</li>";
    $("#results").append(resultsLi);
    }
};

//
// function displayPagination(total, LIMIT, offset) {
//
// };

$(document).ready(function() {
  $("#search_bt").click(function(){
    getComicsFromApi(LIMIT, 0);
  });
})
