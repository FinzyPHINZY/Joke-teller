let audioElement = document.getElementById("audio");
const button = document.getElementById("button");

const url = "https://v2.jokeapi.dev/joke/Programming,Dark";

// User clicks button. Trigger fetch. Run getJokes function;
button.addEventListener("click", getJokes);

function getJokes() {
  let joke = "";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (joke) {
        joke = data.joke;
      } else {
        joke = `${data.setup} - ${data.delivery}`;
      }
      sayJoke(joke);
      console.log(data);
    })
    .catch((error) => console.log(error));
}

// async function getJokes(url) {
//   let joke = "";
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     if (data.joke) {
//       joke = data.joke;
//     } else {
//       joke = `${data.setup}...${data.delivery}`;
//     }
//     // console.log(joke);
//     sayJoke(joke);
//   } catch (error) {
//     console.log(error);
//   }
// }

function sayJoke(joke) {
  console.log(joke);

  const utterance = new SpeechSynthesisUtterance(joke);
  utterance.onstart = (event) => console.log("Speech has started", event);

  speechSynthesis.speak(utterance);

  utterance.onend = (event) => console.log("Speech has ended", event);
}
