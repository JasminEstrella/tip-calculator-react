export default function Output({ bill, tips }) {
  return (
    <div className="output">
      <h2>You pay total of {`$${bill + tips} ($${bill} bill + $${tips} tip)`}</h2>
    </div>
  );
}
