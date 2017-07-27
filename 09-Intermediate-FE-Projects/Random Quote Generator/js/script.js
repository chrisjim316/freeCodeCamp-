var quotes = [
  {quote: "Death is what gives life meaning. To know your days are numbered. Your time is short.", character: "The Ancient One"},
  {quote: "We never lose our demons, Mordo. We only learn to live above them.", character: "The Ancient One"},
  {quote: "You're a man looking at the world through a keyhole. You've spent your life trying to widen it. Your work saved the lives of thousands. What if I told you that reality is one of many?", character: "The Ancient One"},
  {quote: "You're a man looking at the world through a keyhole. You've spent your whole life trying to widen that keyhole... to see more, to know more. And now, on hearing that it can be widened, in ways you can't imagine, you reject the possibility.", character: "The Ancient One"},
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
  {quote: "Word of the Ancient One's death will spread through the Multiverse. Earth has no Sorcerer Supreme to defend it. We must be ready.", character: "Wong"},
  {quote: "Stephen. Everything is about you.", character: "Christine Palmer"},
  {quote: "This isn't the end, there are other things that can give your life meaning.", character: "Christine Palmer"},
  {quote: "I call it the Strange technique.", character: "Christine Palmer"},
  {quote: "You are still in shock.", character: "Christine Palmer"},
  {quote: "People think in terms of good and evil, but really, time is the true enemy of us all. Time kills everything.", character: "Kaecilius"},
  {quote: "I am death, and pain!", character: "Kaecilius"},
  {quote: "You'll die protecting this world!", character: "Kaecilius"},
  {quote: "This world doesn't have to die, Mister Doctor. This world can take its place alongside many which is part of the one, the great and beautiful one. And we can all live forever", character: "Kaecilius"},
  {quote: "But the Dark Dimension, it's a place beyond time. Beyond death.", character: "Kaecilius"}
];

function generateQuote() {
  randomQuote = quotes[parseInt(Math.random() * quotes.length)];
  $("#quote").text(randomQuote.quote);
  $("#character").text(randomQuote.character);
}

$(document).ready(function() {
  $("#genQuote").on("click", function() { 
    generateQuote();
    $("div.quoteContainer").removeClass("hide");
  });
});
