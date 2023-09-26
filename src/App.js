import { useState } from "react";
import CalculatorForm from "./components/form/CalculatorForm";
import CalculatorTable from "./components/table/CalculatorTable";
import Header from "./components/header/Header";

function App() {
  const [data, setData] = useState(null);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["currentSavings"]; // feel free to change the shape of this input object!
    let yearlyContribution = +userInput["yearlyContribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];
    let totalInterest = 0;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        totalInterest: totalInterest,
        investedCapital: currentSavings - totalInterest,
      });
    }

    setData(yearlyData);
    // do something with yearlyData ...
  };

  const submitHandler = (props) => {
    calculateHandler(props);
    //console.log(props);
  };

  const resetHandler = (props) => {
    setData(null);
    console.log(props);
  };

  return (
    <div>
      <Header />
      <CalculatorForm onSubmit={submitHandler} onReset={resetHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {!data && <p>No calculation data yet!</p>}
      {data && <CalculatorTable data={data} />}
    </div>
  );
}

export default App;
