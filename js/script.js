/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * This Random Quote Generator is a simple application that
 * generates a random famous quote every twelve seconds or at
 * any time the "Show another quote" button is pressed.
***/


/*** 
 * quotes array
 * An array of objects containing a total of eleven quotes
***/

const quotes = [
  {
    quote: "Becoming requires equal parts patience and rigor. Becoming is never giving up on the idea that there's more growing to be done.",
    source: "Michelle Obama",
    citation: "Becoming",
    year: 2018,
    tags: ["inspirational", "self-growth"]
  },
  {
    quote: "Like what you do, and then you will do your best.",
    source: "Katherine Johnson",
    tags: ["self-growth", "life"]
  },
  {
    quote: "You have brains in your head. You have feet in your shoes. You can steer yourself in any direction you choose!",
    source: "Dr. Seuss",
    citation: "Cat in the Hat",
    year: 1957,
    tags: ["inspirational", "life"]
  },
  {
    quote: "Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat.",
    source: "Sun Tzu",
    citation: "The Art of War",
    tags: ["strategy", "tactics", "warfare"]
  },
  {
    quote: "Life will only change when you become more committed to your dreams than you are to your comfort zone.",
    source: "Billy Cox",
    tags: ["dreams", "self-growth"]
  },
  {
    quote: "Innovation is the ability to see change as an opportunity - not a threat.",
    source: "Steve Jobs",
    tags: ["inspirational", "self-growth"]
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: "Albert Einstein",
    tags: ["humor", "science"]
  },
  {
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    citation: "Twitter",
    year: 2016
  },
  {
    quote: "Learning never exhausts the mind.",
    source: "Leonardo da Vinci"
  },
  {
    quote: "Good judgement comes from experience, and a lot of that comes from bad judgement.",
    source: "Will Rogers"
  },
  {
    quote: "It is far better to be alone, than to be in bad company.",
    source: "George Washington"
  }
];

/***
 * getRandomQuote function
 * Retrieves a random quote from the quotes array
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];
  return randomQuote;
}

/***
 * printQuote function
 * Displays a random quote and changes
 * the background color of the body
***/

function printQuote() {
  let quote = getRandomQuote();

  // display the quote and the source
  let displayQuote = `<p class="quote">${quote.quote}</p>
                      <p class="source">${quote.source}`;
  
  // check for the citation and display it, if available
  if (quote.citation !== undefined) {
    displayQuote += `<span class="citation">${quote.citation}</span>`;
  }

  // check for the year and display it, if available
  if (quote.year !== undefined) {
    displayQuote += `<span class="year">${quote.year}</span>`;
  }

  // check for tags and display them, if available
  if (quote.tags !== undefined) {
    let tags = `Tags: ${quote.tags.join(', ')}`;
    displayQuote += `<span class="year">${tags}</span>`;
  }

  displayQuote += '</p>';

  // display the final quote to the page
  document.getElementById('quote-box').innerHTML = displayQuote;

  changeBackgroundColor();
}

// printQuote helper function

/***
 * changeBackgroundColor function
 * Chooses a random RGB color and sets
 * it as the background color of the body
 ***/

function changeBackgroundColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  let rgbColor = `rgb(${red}, ${green}, ${blue})`;

  document.body.style.backgroundColor = rgbColor;
}

// Automatically refresh quotes every twelve seconds
setInterval(printQuote, 12000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);