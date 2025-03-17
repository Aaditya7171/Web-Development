import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const masterKey = "4VGP2DN-6EWM4SJ-N6FGRHV-Z3PR3TT";

app.use(bodyParser.urlencoded({ extended: true }));

//1. GET a random joke
app.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json(jokes[randomIndex]);
});

//2. GET a specific joke
app.get("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const foundJoke = jokes.find((joke) => joke.id === id);
  res.json(foundJoke);
});

//3. GET a jokes by filtering on the joke type
app.get("/filter", (req, res) => {
  const type = req.query.type;
  const filteredActivities = jokes.filter((joke) => joke.jokeType === type);
  res.json(filteredActivities);
});

//4. POST a new joke
app.post("/jokes", (req, res) => {
  const newJoke = {
    id: jokes.length + 1,
    jokeText: req.body.text,
    jokeType: req.body.type,
  };
  jokes.push(newJoke);
  console.log(jokes.slice(-1));
  res.json(newJoke);
});

//5. PUT a joke
app.put("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const replacementJoke = {
    id: id,
    jokeText: req.body.text,
    jokeType: req.body.type,
  };
  const sIndex = jokes.findIndex((joke) => joke.id === id);
  jokes[sIndex] = replacementJoke;
  res.json(replacementJoke);
});

//6. PATCH a joke

//7. DELETE Specific joke

//8. DELETE All jokes

app.listen(port, () => {
  console.log(`Successfully started server on port ${port}.`);
});

var jokes = [
  {
    id: 1,
    jokeText: "Why did the kimchi go to the party? Because it was the life of the fermentation.",
    jokeType: "Korean Food",
  },
  {
    id: 2,
    jokeText: "Why did the kimchi refuse to play hide and seek? Because it didn’t want to be pickled.",
    jokeType: "Random",
  },
  {
    id: 3,
    jokeText: "What did the kimchi say to the salad dressing? 'You’re looking saucy!'",
    jokeType: "Korean Food",
  },
  {
    id: 4,
    jokeText: "What did the spicy noodle say to the plain noodle? 'You're so boring, you need some spice in your life!'",
    jokeType: "Korean Food",
  },
  {
    id: 5,
    jokeText: "Why did the kimchi go to therapy? It had too many fermentation issues.",
    jokeType: "Korean Food",
  },
  {
    id: 6,
    jokeText: "Why did the pizza go to the gym? To work on its crust.",
    jokeType: "Indian Food",
  },
  {
    id: 7,
    jokeText: "Why did the burger go to the gym? To get buns of steel.",
    jokeType: "Indian Food",
  },
  {
    id: 8,
    jokeText: "Why did the coffee file a police report? It got mugged.",
    jokeType: "Indian Food",
  },
  {
    id: 9,
    jokeText: "What do you call a fake noodle? An impasta!",
    jokeType: "Indian Food",
  },
  {
    id: 10,
    jokeText: "Why did the noodle break up with the sauce? It found something more al dente!",
    jokeType: "Indian Food",
  },
  {
    id: 11,
    jokeText: "Why did Ha-Ri agree to go on the blind date? She wanted to help her friend, but ended up proposing a business deal!",
    jokeType: "Business Proposal",
  },
  {
    id: 12,
    jokeText: "What did Kang Tae-Moo say when he found out Ha-Ri was his employee? 'This is a real business proposal!'",
    jokeType: "Business Proposal",
  },
  {
    id: 13,
    jokeText: "How does Ha-Ri like her coffee? With a side of awkwardness from her CEO.",
    jokeType: "Business Proposal",
  },
  {
    id: 14,
    jokeText: "What’s the best way to describe their relationship? It’s a mix of business and pleasure, with more business than pleasure at first.",
    jokeType: "Business Proposal",
  },
  {
    id: 15,
    jokeText: "Why is their relationship like a business proposal? Because it’s all about negotiation and finding common ground!",
    jokeType: "Business Proposal",
  },
  {
    id: 16,
    jokeText: "Why did the zombie go to school? To get a bite of knowledge!",
    jokeType: "All of Us Are Dead",
  },
  {
    id: 17,
    jokeText: "What did the high school student say when they saw a zombie? 'Oh, great, another pop quiz!'",
    jokeType: "All of Us Are Dead",
  },
  {
    id: 18,
    jokeText: "How does a zombie ask for directions? 'Braaaains to the cafeteria?'",
    jokeType: "All of Us Are Dead",
  },
  {
    id: 19,
    jokeText: "What’s the difference between a zombie and a student in 'All of Us Are Dead'? The student can still fail the exam, but the zombie has already passed away.",
    jokeType: "All of Us Are Dead",
  },
  {
    id: 20,
    jokeText: "Why don’t zombies from 'All of Us Are Dead' eat kimchi? They prefer brains over fermented cabbage.",
    jokeType: "All of Us Are Dead",
  },
  {
    id: 21,
    jokeText: "What did Wednesday say to her coffee? 'Make it dark and bitter, just like me.'",
    jokeType: "Movies and Series",
  },
  {
    id: 22,
    jokeText: "Why did Wednesday go to the dance? To practice her funeral steps.",
    jokeType: "Movies and Series",
  },
  {
    id: 23,
    jokeText: "What did Iron Man say to his burger? 'I am bun!'",
    jokeType: "Movies and Series",
  },
  {
    id: 24,
    jokeText: "How does Iron Man like his steak? Stark-rare.",
    jokeType: "Movies and Series",
  },
  {
    id: 25,
    jokeText: "What did Thanos say to the Avengers? 'I'm going to snap you out of existence!'",
    jokeType: "Movies and Series",
  },
  {
    id: 26,
    jokeText: "Why did Captain America bring a notebook to the battle? To take notes on how to assemble the team better next time.",
    jokeType: "Movies and Series",
  },
  {
    id: 27,
    jokeText: "What’s the Na'vi’s favorite color? Blue, obviously.",
    jokeType: "Movies and Series",
  },
  {
    id: 28,
    jokeText: "Why did the Na'vi go to the gym? To work on their avatar physique.",
    jokeType: "Movies and Series",
  },
  {
    id: 29,
    jokeText: "What did the ghost say to the family? 'I'm here to give you a scare!'",
    jokeType: "Movies and Series",
  },
  {
    id: 30,
    jokeText: "Why did the demon possess the doll? It wanted to play with the kids.",
    jokeType: "Movies and Series",
  },
  {
    id: 31,
    jokeText: "How does Spider-Man eat his noodles? With a web of chopsticks.",
    jokeType: "Movies and Series",
  },
  {
    id: 32,
    jokeText: "What’s Spider-Man’s favorite type of music? Anything he can swing to.",
    jokeType: "Movies and Series",
  },
  {
    id: 33,
    jokeText: "Why did the astronaut bring a towel to space? To clean up after the stellar mess.",
    jokeType: "Movies and Series",
  },
  {
    id: 34,
    jokeText: "What’s the Avengers’ favorite food? Shawarma, assemble.",
    jokeType: "Movies and Series",
  },
  {
    id: 35,
    jokeText: "Why did the three idiots go to the library? To find some sense.",
    jokeType: "Movies and Series",
  },
  {
    id: 36,
    jokeText: "Why did Milkha run so fast? To catch the last samosa.",
    jokeType: "Movies and Series",
  },
  {
    id: 37,
    jokeText: "What did the demon say to the priest? 'I’m going to make you spin in circles!'",
    jokeType: "Movies and Series",
  },
  {
    id: 38,
    jokeText: "What did Thor say to his brother Loki? 'You’re a real pain in the Asgard!'",
    jokeType: "Movies and Series",
  },
  {
    id: 39,
    jokeText: "What did Doctor Strange say to his apprentice? 'You’re spell-tacular!'",
    jokeType: "Movies and Series",
  },
  {
    id: 40,
    jokeText: "What’s the Guardians’ favorite song? 'Hooked on a Feeling' by Blue Swede.",
    jokeType: "Movies and Series",
  },
  {
    id: 41,
    jokeText: "Why are cats good at video games? Because they have purr-fect aim.",
    jokeType: "Cute Animals",
  },
  {
    id: 42,
    jokeText: "Why did the wiener dog go to his shelter at noon? Because he didn’t want to be a hotdog!",
    jokeType: "Cute Animals",
  },
  {
    id: 43,
    jokeText: "What do cats like to eat on a hot day? A mice-cream cone!",
    jokeType: "Cute Animals",
  },
  {
    id: 44,
    jokeText: "Why did the dog sit on the newspaper? To catch up on current events.",
    jokeType: "Cute Animals",
  },
  {
    id: 45,
    jokeText: "What’s a dog’s favorite dessert? Pupcakes.",
    jokeType: "Cute Animals",
  },
  {
    id: 46,
    jokeText: "Why did the dog chase his tail? He was trying to make both ends meet.",
    jokeType: "Cute Animals",
  },
  {
    id: 47,
    jokeText: "What do you call a panda who likes to tell jokes? A pun-dit.",
    jokeType: "Cute Animals",
  },
  {
    id: 48,
    jokeText: "Why did the rabbit bring a ladder? Because it wanted to hop to new heights!",
    jokeType: "Cute_Animals",
  },
  {
    id: 49,
    jokeText: "Why do elephants never use computers? Because they’re afraid of the mouse!",
    jokeType: "Cute_Animals",
  },
  {
    id: 50,
    jokeText: "What do you call a bear with no teeth? A gummy bear!",
    jokeType: "Cute_Animals",
  }
] 