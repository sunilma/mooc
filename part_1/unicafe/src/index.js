import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const Button = ({ name, val, setVal }) => (
  <button onClick={() => setVal(val + 1)}>{name}</button>
);

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button name="Good" val={good} setVal={setGood} />
      <Button name="Neutral" val={neutral} setVal={setNeutral} />
      <Button name="Bad" val={bad} setVal={setBad} />
      <br />
      <h1>Statistics</h1>
      <Statistics text="Good" value={good} />
      <Statistics text="Neutral" value={neutral} />
      <Statistics text="Bad" value={bad} />
      <Statistics text="All" value={total} />
      <Statistics text="Average" value={total ? (good - bad) / total : 0} />
      <Statistics text="Positive" value={total ? (good * 100) / total : 0} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
