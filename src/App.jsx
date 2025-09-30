import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable";
import { useState } from "react";

function App() {
  const initialUserInput = {
    initialInvestment: "10000",
    annualInvestment: "1200",
    expectedReturn: "6",
    duration: "10",
  };
  const [userInput, setUserInput] = useState(initialUserInput);

  // consider using Number() or parseFloat() or BigNumber() to make code clearer to read
  // BigNumber can handle strings and numbers and gives a greater degree of accuracy
  const inputIsValid = +userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prev) => ({
      ...prev,
      [inputIdentifier]: newValue,
    }));
  }

  const convertUserInputToNumbers = Object.fromEntries(
    Object.entries(userInput).map(([key, value]) => [key, +value || 0])
  );

  return (
    <>
      <Header id="header" title="Investment Calculator" />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      {inputIsValid ? (
        <ResultsTable userInput={convertUserInputToNumbers} />
      ) : (
        <p className="center">Please enter a duration greater than zero</p>
      )}
    </>
  );
}

export default App;
