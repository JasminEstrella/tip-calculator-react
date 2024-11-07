import { useState } from "react";
import Bill from "./Bill";
import Output from "./Output";
import ServiceTip from "./ServiceTip";

export function TipCalculator() {

  const [bill, setBill] = useState('');
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const totalTips = bill * ((tip1 + tip2) / 2) / 100;

  function onReset() {
    setBill('');
    setTip1(0);
    setTip2(0);
  }

  return (
    <div className='content-box'>
      <Bill curBill={bill} inputBill={setBill}></Bill>
      <ServiceTip key="0" curTip={tip1} onSelectTip={setTip1}>How did you like the service?</ServiceTip>
      <ServiceTip key="1" curTip={tip2} onSelectTip={setTip2}>How did your friend like the service?</ServiceTip>

      {bill > 0 && (
        <>
          <Output bill={bill} tips={totalTips}></Output>
          <button onClick={() => onReset()}>Reset</button>
        </>
      )}

    </div>
  );
}
