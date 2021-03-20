import logo from './logo.svg';
import './App.css';
import React from 'react';

// This one has an implicit return
const bgColors = ['AliceBlue','CornflowerBlue','DarkGreen','DimGrey','Ivory','Crimson','PaleGreen' ];
const quoteColors = ['Azure', 'CadetBlue','DarkOliveGreen','DimGray','HoneyDew','Cornsilk', 'MintCream'];
const quotes = [
  {
  text: "I do not fear computers. I fear lack of them",
  author: "Isaac Asimov"
},
    {
      text: "A computer once beat me at chess, but it was no match for me at kick boxing",
      author:"Emo Philips"
    },
  {
    text: "The computer was born to solve problems that did not exist before",
    author: "Bill Gates"
  },
  {
    text: "If people never did silly things, nothing intelligent would ever get done",
    author: "Ludwig Wittgenstein"
  },
  {
    text: "If you think your users are idiots, only idiots will use it",
    author: "Linus Torvalds"
  },
  {
    text: "Commenting your code is like cleaning your bathroom — you never want to do it, but it really does create a more pleasant experience for you and your guests",
    author: "Ryan Campbell"
  },
  {
    text: "Don’t document the problem, fix it",
    author: "Atli Björgvin Oddsson"
  }];

const getRand = vect => Math.floor(Math.random()*vect.length);

function App () {
  //Inizializzo lo sfondo con un colore casuale
  let bgNum = getRand(bgColors);
  const [bgColor, setBgColor] = React.useState(bgColors[bgNum]);
  document.getElementById("root").style.backgroundColor = bgColor;
  
  //Inizializzo il colore del box con un colore casuale
  let quoteBoxNum = getRand(quoteColors);
  const [quoteBoxColor, setquoteBoxColor] = React.useState(quoteColors[bgNum]);
  
  //Inizializzo il testo e l'autore delle citazioni
  let quoteNum = getRand(quotes);
  const [quote, setQuote] = React.useState(quotes[quoteNum]);
  
  //Gestisco il click e cambio gli stati
   const handleClick = () => { 
     setBgColor(bgColors[getRand(bgColors)]);
     setquoteBoxColor(quoteColors[getRand(quoteColors)]);
     setQuote(quotes[getRand(quotes)]);
     }
  
  
  return (
    <div id="quote-box" style={{backgroundColor: quoteBoxColor}} class="shadow-lg p-3 mb-5 bg-body rounded">
    <quote id="text" >
      "{quote.text}"
    </quote>
    <p id="author"><br/>{quote.author}</p>
   <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank"><i class="fab fa-twitter"></i>  </a><button id="new-quote" type="button" class="btn btn-light" onClick={handleClick}>New quote</button>
  </div>
  )
}


export default App;
