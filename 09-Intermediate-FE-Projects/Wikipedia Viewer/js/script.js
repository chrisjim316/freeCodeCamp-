var search = document.getElementById("search");
var response = "";
var searchURL = "";

var randomWikiAPI="https://en.wikipedia.org/wiki/Special:Random";
$(document).ready(function() {
});

/* function provides an event listener for the search box, and detects the Enter key. On Enter key, do
* an article query on Wikipedia using user's search criteria. */
$("search").keydown(function (event) {
  if (event.keyCode === 13) {                // test for Enter key pressed (ASCII 13).
     search.value = "";                       // clear search box.
     search();                                // run Wikipedia search.
     return false;                            // return prevents premature Submit of input text box.
  }
});


/* function search() makes the actual JSONP query to Wikipedia.*/
function search() {
  searchURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" + $("search").val() + "&callback=?";
	// srsearch -> get all search results based on keyword search.
  // by default 10 search results are returned.  
  $.ajax({
    url: searchURL,
    data: queryData,
    dataType: "jsonp",
    contentType: "application/json; charset=utf-8",
    async: false,
    type: "GET",
    headers: {
      'Api-User-Agent': 'Example/1.0'
    },
    success: function(data) {
      // First we make sure no previous results are showing.
      var results = data.query.pages;
      //generate html for each search result 
      for(var res in results) {
        response = '<div class="well"><div id="title"><h1>' + res.title + '</h1></div>' + '<div id="body"><h2>' + res.extract + '</h2></div></div>';
        $("#response-area").append(response);
      }  
    }
  });
}
