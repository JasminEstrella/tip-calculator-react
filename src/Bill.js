export default function Bill({ curBill, inputBill }) {
  return (
    <div className='input'>
      <label>How much was the bill?</label>
      <input min="0" placeholder='Bill value here...' type='number' value={curBill} onChange={(e) => inputBill(Number(e.target.value))} />
    </div>
  );
}
