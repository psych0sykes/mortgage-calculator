import {useState, useEffect} from "react";
import Section from "../../Section";
import Input from "../../Form/Input";

export default function Payment() {
  const [params,setParams] = useState({P: 250000,r: 3,n: 30});
  const [mortgagePayment,setMortgagePayment] = useState();

  // M = P[r(1+r)^n/((1+r)^n)-1)]

  const calculatePayment = (principal,interest,term) => {
    const p = principal;
    const r = interest / 100 / 12;
    const n = term * 12;

    const payment = p * ((r * ((1 + r) ** n))/(((1 + r) ** n) - 1))
    console.log(p + "[" + r + "(1 + " + r + ")^" + n + "/((1+" + r + ")^" + n + ")-1)]");
    console.log((0.0025 * (1 + 0.0025)))
    setMortgagePayment(payment)
  }

  const handleParams = (title,value) => {
    let newParams = {
      ...params,
      [title]: value,
    };
    setParams(newParams)
  }

  useEffect(() => {
    calculatePayment(params.P,params.r,params.n);
  });


    return (
      <div>
        <h2>
          monthly payment
        </h2>
        <Section direction="column">
              <form>
                <Input label="mortgage amount" size="medium" type="number" cb={(event)=>handleParams("P",event.target.value)}/>
                <Input label="interest rate" tail="%" size="small" type="number" cb={(event)=>handleParams("r",event.target.value)}/>
                <Input label="term length" tail="years" size="small" type="number" cb={(event)=>handleParams("n",event.target.value)}/>
              </form>
              <div>
                {mortgagePayment}
              </div>
          </Section>
      </div>
    )
  }