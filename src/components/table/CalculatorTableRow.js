const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const CalculatorTableRow = (props) => {
  return (
    <tr>
      <td>{props.rowData["year"]}</td>
      <td>{formatter.format(props.rowData["savingsEndOfYear"])}</td>
      <td>{formatter.format(props.rowData["yearlyInterest"])}</td>
      <td>{formatter.format(props.rowData["totalInterest"])}</td>
      <td>{formatter.format(props.rowData["investedCapital"])}</td>
    </tr>
  );
};

export default CalculatorTableRow;
