import styles from "./CalculatorTable.module.css"
import CalculatorTableRow from "./CalculatorTableRow";

const CalculatorTable = (props) => {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((row) => {
            return <CalculatorTableRow key={row.year} rowData={row}/>
        })}
        
      </tbody>
    </table>
  );
};

export default CalculatorTable;
