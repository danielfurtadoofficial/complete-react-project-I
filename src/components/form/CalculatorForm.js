import { useState } from "react";
import styles from "./CalculatorForm.module.css";

const CalculatorForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit({
      currentSavings: parseInt(currentSavings),
      yearlyContribution: parseInt(yearlyContribution),
      expectedReturn: parseInt(expectedReturn),
      duration: parseInt(duration),
    });
  };

  const resetHandler = (event) => {
    event.preventDefault();
    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
    props.onReset();
  };

  const currentSavingsChangeHandler = (event) => {
    setCurrentSavings(event.target.value);
    //console.log(event.target.value);
  };

  const yearlyContributionChangeHandler = (event) => {
    setYearlyContribution(event.target.value);
    //console.log(event.target.value);
  };

  const expectedReturnChangeHandler = (event) => {
    setExpectedReturn(event.target.value);
    //console.log(event.target.value);
  };

  const durationChangeHandler = (event) => {
    setDuration(event.target.value);
    //console.log(event.target.value);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={currentSavingsChangeHandler}
            value={currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={yearlyContributionChangeHandler}
            value={yearlyContribution}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={expectedReturnChangeHandler}
            value={expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={durationChangeHandler}
            value={duration}
          />
        </p>
      </div>
      <p className={styles["actions"]}>
        <button
          type="reset"
          className={styles["buttonAlt"]}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default CalculatorForm;
