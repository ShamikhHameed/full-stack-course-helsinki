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

  const setToGood = (newGood) => {
    console.log("Good value now", good);
    setGood(newGood);
  };

  const setToNeutral = (newNeutral) => {
    console.log("Neutral value now", neutral);
    setNeutral(newNeutral);
  };

  const setToBad = (newBad) => {
    console.log("Bad value now", bad);
    setBad(newBad);
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
    </div>
  );
};

export default App;
