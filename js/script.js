/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
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
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);