import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const DisplayHeader = (props) => <h2>{props.value}</h2>;

const Display = (props) => (
  <div>
    {props.feedbackType} {props.value}
  </div>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const setToGood = (newGood) => {
    console.log("Good value now", newGood);
    setGood(newGood);
    const newAll = all + 1;
    setToAll(newAll);
    setToPositive(newGood, newAll);
    setToAverage(newGood, bad, newAll);
  };

  const setToNeutral = (newNeutral) => {
    console.log("Neutral value now", newNeutral);
    setNeutral(newNeutral);
    const newAll = all + 1;
    setToAll(newAll);
    setToPositive(good, newAll);
    setToAverage(good, bad, newAll);
  };

  const setToBad = (newBad) => {
    console.log("Bad value now", newBad);
    setBad(newBad);
    const newAll = all + 1;
    setToAll(newAll);
    setToPositive(good, newAll);
    setToAverage(good, newBad, newAll);
  };

  const setToAll = (newAll) => {
    console.log("All value now", newAll);
    setAll(newAll);
  };

  const setToAverage = (updatedGood, updatedBad, updatedAll) => {
    const avgVal = (updatedGood - updatedBad) / updatedAll;
    console.log("Average value now", avgVal);
    setAverage(avgVal);
  };

  const setToPositive = (updatedGood, updatedAll) => {
    const positiveVal = (updatedGood / updatedAll) * 100 + " %";
    console.log("Positive value now", positiveVal);
    setPositive(positiveVal);
  };

  return (
    <div>
      <DisplayHeader value="give feedback" />

      <Button text="good" handleClick={() => setToGood(good + 1)} />
      <Button text="neutral" handleClick={() => setToNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setToBad(bad + 1)} />

      <DisplayHeader value="statistics" />

      <Display feedbackType="good" value={good} />
      <Display feedbackType="neutral" value={neutral} />
      <Display feedbackType="bad" value={bad} />
      <Display feedbackType="all" value={all} />
      <Display feedbackType="average" value={average} />
      <Display feedbackType="positive" value={positive} />
    </div>
  );
};

export default App;
