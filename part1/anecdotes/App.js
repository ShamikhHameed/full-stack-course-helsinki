import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Anecdote = (props) => <div>{props.text}</div>;

const Vote = (props) => <div>has {props.vote} votes</div>;

const Header = (props) => <h2>{props.text}</h2>;

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
  const [maxVote, setMaxVote] = useState(0);

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomNumber = () => {
    const randomNumberGenerated = randomNumberInRange(0, 7);
    console.log(randomNumberGenerated);
    setSelected(randomNumberGenerated);
  };

  const addVote = (selectedAnecdote) => {
    const copy = [...points];
    copy[selectedAnecdote] += 1;
    setPoints(copy);
    console.log(copy);

    const MaxVote = Math.max(...copy);
    setMaxVote(MaxVote);
  };

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} />
      <Vote vote={points[selected]} />
      <Button handleClick={() => addVote(selected)} text="vote" />
      <Button handleClick={() => randomNumber()} text="next anecdote" />

      <Header text="Anecdote with most votes" />
      <Anecdote text={anecdotes[points.indexOf(maxVote)]} />
    </div>
  );
};

export default App;
