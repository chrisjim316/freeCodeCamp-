//https://www.mediawiki.org/wiki/API:Search_and_discovery
var wikiAPI = "//en.wikipedia.org/w/api.php";
var search = $('#search');
var response = $('#response');

$(document).ready(function() {
  $("#searchButton").on("click", function () {
    $("response").empty(); //make sure previous results are omitted. 
    $.ajax({
    url: wikiAPI,
    data: { action: 'query', list: 'search', srsearch: search.val(), format: 'json' },
    dataType: 'jsonp',
    success: function (x) {
      var html  = '';
          html += '  <div class="row row-centered">';
          
      x.query.search.map(function(w) {
        html += '    <div class="col-md-6">';
        html += '      <a href="https://en.wikipedia.org/wiki/' + w.title + '" target="_blank">';
        html += '        <div class="panel panel-default">';
        html += '          <div class="panel-heading">';
        html += '            <h3 class="panel-title">' + w.title + '</h3>';
        html += '          </div>';
        html += '          <div class="panel-body">';
        html += '            ' + w.snippet;
        html += '          </div>';
        html += '        </div>';
        html += '      </a>';
        html += '    </div>';
      });
      
      html += '  </div>';
      
      response.html(html);
    }
    });//end ajax function
  }); //end searchButton 
}); //end document.ready

/* search the wiki when enter key is pressed. */
search.keypress(function (e) {
  if (e.which == 13) {
    $("#searchButton").click(); 
    return false; //prevent refreshing the page every time enter key is pressed. 
  }
});

/* alternatively if required to update search results constantly as user type new letters/words
search.keyup(function() {
  $.ajax({
    url: '//en.wikipedia.org/w/api.php',
    data: { action: 'query', list: 'search', srsearch: search.val(), format: 'json' },
    dataType: 'jsonp',
    success: function (x) {
      var html  = '';
          html += '  <div class="row row-centered">';
          
      x.query.search.map(function(w) {
        html += '    <div class="col-xs-6">';
        html += '      <a href="https://en.wikipedia.org/wiki/' + w.title + '" target="_blank">';
        html += '        <div class="panel panel-default">';
        html += '          <div class="panel-heading">';
        html += '            <h3 class="panel-title">' + w.title + '</h3>';
        html += '          </div>';
        html += '          <div class="panel-body">';
        html += '            ' + w.snippet;
        html += '          </div>';
        html += '        </div>';
        html += '      </a>';
        html += '    </div>';
      });
      
      html += '  </div>';
      
      response.html(html);
    }
  });
});
*/
  
