var tweetURL = "";
var facebookURL = "";

var quotes = [
  {quote: "Death is what gives life meaning. To know your days are numbered. Your time is short.", character: "The Ancient One"},
  {quote: "We never lose our demons, Mordo. We only learn to live above them.", character: "The Ancient One"},
  {quote: "Your work saved the lives of thousands. What if I told you that reality is one of many?", character: "The Ancient One"},
  {quote: "I spent so many years peering through time... looking at this exact moment. But I can't see past it.", character: "The Ancient One"},
  {quote: "Through the mystic arts, we harness energy and shape reality.", character: "The Ancient One"},
  {quote: "I never saw your future, only its possibilities.", character: "The Ancient One"},
  {quote: "The true purpose of a sorcerer is to twist things out of their proper shape. Stealing power. Perverting nature. Like you.", character: "Baron Mordo"},
  {quote: "Power has a purpose.", character: "Baron Mordo"},
  {quote: "Temporal manipulations can create branches in time. Unstable dimensional openings. Spatial paradoxes! Time loops!", character: "Baron Mordo"},
  {quote: "It's the Wi-Fi password. We're not savages.", character: "Baron Mordo"},
  {quote: "I'm fluent in Google Translate.", character: "Dr. Stephen Strange"},
  {quote: "Dormammu, I've come to bargain!", character: "Dr. Stephen Strange"},
  {quote: "The warnings come after the spells.", character: "Dr. Stephen Strange"},
  {quote: "Since you gave Kaecilius power from your dimension, I brought some power from mine. This is time. Endless, looped time!", character: "Dr. Stephen Strange"},
  {quote: "No. But I can lose. Again. And again. And again. Forever. That makes you my prisoner.", character: "Dr. Stephen Strange"},
  {quote: "While heroes like the Avengers protect the world from physical dangers, we sorcerers safeguard it against more mystical threats.", character: "Wong"},
  {quote: "*Laughs", character: "Wong"},
  {quote: "Word of the Ancient One's death will spread through the Multiverse. Earth has no Sorcerer Supreme to defend it. We must be ready.", character: "Wong"},
  {quote: "Stephen. Everything is about you.", character: "Christine Palmer"},
  {quote: "This isn't the end, there are other things that can give your life meaning.", character: "Christine Palmer"},
  {quote: "I call it the Strange technique.", character: "Christine Palmer"},
  {quote: "You are still in shock.", character: "Christine Palmer"},
  {quote: "People think in terms of good and evil, but really, time is the true enemy of us all. Time kills everything.", character: "Kaecilius"},
  {quote: "I am death, and pain!", character: "Kaecilius"},
  {quote: "You'll die protecting this world!", character: "Kaecilius"},
  {quote: "This world doesn't have to die, Mister Doctor. We can all live forever", character: "Kaecilius"},
  {quote: "But the Dark Dimension, it's a place beyond time. Beyond death.", character: "Kaecilius"}
];

$(document).ready(function() {
  $("#tweet").hide();
  $("#facebook").hide();
  $("#genQuote").on("click", function() { 
    $("div.quoteContainer").removeClass("hide");
    generateQuote();
    $("body").css("height", "500px");
    $("#tweet").show();
    $("#facebook").show();
  });
  
  $("#tweet").on("click", function () {
    tweetQuote();
  });
  
  $("#facebook").on("click", function() {
    shareQuote();
  });
});

function generateQuote() {
  randomQuote = quotes[parseInt(Math.random() * quotes.length)];
  var quote = randomQuote.quote;
  var character = randomQuote.character;
  $("#quote").text(quote);
  $("#character").text(character);
  getBackground(character); 
  spellAnimation.stop();
  spellAnimation.play(); 
  /* (% url encoding) %20 => space line %23 = hashtag */ 
  tweetURL = "https://twitter.com/intent/tweet?text=" + quote + "%0A-" + character + "%20%23quoteOfTheDay%20%23drstrange";
  facebookURL = "https://www.facebook.com/sharer/sharer.php?u="+escape("https://codepen.io/liljimbos/pen/JydZJX")+"&t="+document.title;
}

function tweetQuote() {
  $("#tweet").attr("href", tweetURL);
}

function shareQuote() {
  $("#facebook").attr("href", facebookURL);
}

function getBackground(character) {
  switch (character) {
      
    case "The Ancient One": 
      $("body").css("background-image", "url(https://user-images.githubusercontent.com/26378494/28656463-b7ec080a-72d4-11e7-8c16-319f5ea4879d.png)");
      $("h1").css("color", "white");
      break;
      
    case "Baron Mordo":
      $("body").css("background-image", "url(https://user-images.githubusercontent.com/26378494/28656464-b80256be-72d4-11e7-831a-2e98b9df8d9d.jpg)");
      $("h1").css("color", "white");
      break;
      
    case "Dr. Stephen Strange":
      $("body").css("background-image", "url(https://user-images.githubusercontent.com/26378494/28656460-b7c1eafc-72d4-11e7-9f84-4615ae5651e9.jpg)");
      $("h1").css("color", "white");
      break;
      
    case "Wong":
      $("body").css("background-image", "url(https://user-images.githubusercontent.com/26378494/28656459-b7c1b3ac-72d4-11e7-86a2-3fc4ff92fe93.jpg)");
      $("h1").css("color", "white");
      $("footer").css("top", "400px");
      break;
      
    case "Christine Palmer":
      $("body").css("background-image", "url(https://user-images.githubusercontent.com/26378494/28656462-b7eb39fc-72d4-11e7-92ab-6065929b70a9.jpg)");
      $("h1").css("color", "white");
      break;
      
    case "Kaecilius":
      $("body").css("background-image", "url(https://user-images.githubusercontent.com/26378494/28656465-b802f556-72d4-11e7-9ca2-78f6a8ad58d2.jpg)");
      $("h1").css("color", "black");
      break;
  }
}

/* spell customization */

var spellAnimation = bodymovin.loadAnimation({
  container: document.getElementById('potter-animation'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://raw.githubusercontent.com/abrahamrkj/facebook-spell/master/data.json'
})

/* mobile screens media query in JavaScript */
var mqls = [ // list of window.matchMedia() queries
    window.matchMedia("(min-width: 300px)"),
    window.matchMedia("(max-width: 800px)"),
];

if (mqls[0].matches && mqls[1].matches) {
  $("div.footerIcons").remove();
  // window width is at least 300px & window wiith is at most 800px; 
  function getBackground(character) {
    switch (character) {
      
      case "The Ancient One": 
        $("body").css("background-image", "url(https://github.com/iam-chrisjim/Images/blob/master/RandomQuote/AncientOne-mobile.jpg?raw=true)");
        break;
      
      case "Baron Mordo":
        $("body").css("background-image", "url(https://github.com/iam-chrisjim/Images/blob/master/RandomQuote/Mordo-mobile.jpg?raw=true)");
        $("body").css("color", "black");
        break;
      
      case "Dr. Stephen Strange":
        $("body").css("background-image", "url(https://github.com/iam-chrisjim/Images/blob/master/RandomQuote/Strange-mobile.jpg?raw=true)");
        break;
      
      case "Wong":
        $("body").css("background-image", "url(https://github.com/iam-chrisjim/Images/blob/master/RandomQuote/Wong-mobile.jpg?raw=true)");
        break;
      
      case "Christine Palmer":
        $("body").css("background-image", "url(https://github.com/iam-chrisjim/Images/blob/master/RandomQuote/Christine-mobile.jpg?raw=true)");
        $("body").css("color", "black");
        break;
      
      case "Kaecilius":
        $("body").css("background-image", "url(https://github.com/iam-chrisjim/Images/blob/master/RandomQuote/kaecilius-mobile.jpg?raw=true)");
        break;
    }
  }
} 
