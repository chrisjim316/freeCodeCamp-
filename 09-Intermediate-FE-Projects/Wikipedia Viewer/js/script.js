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
