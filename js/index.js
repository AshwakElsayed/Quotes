

var randomQuote = [
{author:`― Oscar Wilde` , quote:`“Be yourself; everyone else is already taken.”`},
{author:`― Frank Zappa` , quote:`“So many books, so little time.”`},
{author:`― Marcus Tullius Cicero` , quote:`“A room without books is like a body without a soul.”`},
{author:`― Mae West` , quote:`“You only live once, but if you do it right, once is enough.”`},
{author:`― Mahatma Gandhi` , quote:`“Be the change that you wish to see in the world.”`},
{author:`― Robert Frost` , quote:`“In three words I can sum up everything I've learned about life: it goes on.”`},
{author:`― Mark Twain` , quote:`“If you tell the truth, you don't have to remember anything.”`},
{author:`― Stephen Chbosky` , quote:`“We accept the love we think we deserve.”`},
{author:`― Friedrich Nietzsche` , quote:`“Without music, life would be a mistake.”`},

];

function generateQuote() {

    var i = Math.floor((Math.random()*randomQuote.length +1));
    document.getElementById("quotePart").innerHTML = randomQuote[i].quote;
    document.getElementById("authorPart").innerHTML = randomQuote[i].author;
     
}
//generateQuote();
function playaudio() {
    document.getElementById("aud").play();  
}
function stopaudio() {
    document.getElementById("aud").pause();  
}