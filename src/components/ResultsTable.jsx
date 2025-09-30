import {
  calculateInvestmentResults,
  formatter,
  calculateInititalInvestment,
  calculateTotalInterest,
  calculateTotalAmountInvested,
} from "../util/investment";

const ResultsTable = ({ userInput }) => {
  const investmentResults = calculateInvestmentResults(userInput);

  const initialInvestment = calculateInititalInvestment(
    investmentResults[0].valueEndOfYear,
    investmentResults[0].interest,
    investmentResults[0].annualInvestment
  );

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResults.map((result, i) => {
          const totalInterest = calculateTotalInterest(
            result.valueEndOfYear,
            result.annualInvestment,
            result.year,
            initialInvestment
          );
          const totalAmountInvested = calculateTotalAmountInvested(
            result.valueEndOfYear,
            totalInterest
          );
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultsTable;
