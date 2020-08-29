import {useState, useEffect} from "react";
import useFormatNumber from "../../../hooks/useFormatNumber";
import Section from "../../Section";
import Input from "../../Form/Input";

export default function Payment() {
  const defaultConfig = {h: 350000,d: 70000,r: 3,n: 30};
  const [params,setParams] = useState(defaultConfig);
  const [mortgagePayment,setMortgagePayment] = useState(0);
  // const [paymentInterest,setPaymentInterest] = useState(0);
  // const [paymentPrincipal,setPaymentPrincipal] = useState(0);
  const mortgageAmount = params.h - params.d;
  const paymentInterest = Math.round((params.r / 1200 * mortgageAmount)*100)/100;
  const paymentPrincipal = mortgagePayment - paymentInterest;

  console.log(paymentInterest);
  console.log(paymentPrincipal);

  // M = P[r(1+r)^n/((1+r)^n)-1)]

  const calculatePayment = (principal,rate,term) => {
    const p = principal;
    const r = rate / 100 / 12;
    const n = term * 12;

    const payment = Math.round(p * ((r * ((1 + r) ** n))/(((1 + r) ** n) - 1)) * 100)/100;
    // console.log(p + "[" + r + "(1 + " + r + ")^" + n + "/((1+" + r + ")^" + n + ")-1)]");
    setMortgagePayment(payment);
    // setPaymentInterest(params.r / 1200 * mortgageAmount);
    // setPaymentPrincipal(mortgagePayment - paymentInterest);
  }

  const handleParams = (title,value) => {
    let newParams = {
      ...params,
      [title]: value,
    };
    setParams(newParams)
  }

  useEffect(() => {
    calculatePayment(mortgageAmount,params.r,params.n);
  });


    return (
      <div>
        <Section direction="column">
          <div style={{marginTop: "60px"}}/>
          <h2>
            monthly payment
          </h2>
        </Section>
        <Section direction="column">
              <form style={{display: "flex",justifyContent: "center"}}>
                <table>
                  <tbody>
                    <Input label="home price" size="medium" placeholder={defaultConfig.h} type="number" cb={(event)=>handleParams("h",event.target.value)}/>
                    <Input label="down payment" size="medium" placeholder={defaultConfig.d} type="number" cb={(event)=>handleParams("d",event.target.value)}/>
                    <Input label="interest rate" tail="%" size="small" placeholder={defaultConfig.r} type="number" cb={(event)=>handleParams("r",event.target.value)}/>
                    <Input label="term length" tail="years" size="small" placeholder={defaultConfig.n} type="number" cb={(event)=>handleParams("n",event.target.value)}/>
                  </tbody>
                </table>
              </form>
              <div style={{marginTop: "60px"}}/>
              <table>
                <tbody>
                  <tr>
                    <td>mortgage amount</td>
                    <td>{useFormatNumber(mortgageAmount)}</td>
                  </tr>
                  <tr style={{fontSize: "20px"}}>
                    <td className="altText">monthly payment</td>
                    <td className="altText">${useFormatNumber(mortgagePayment)}</td>
                  </tr>
                  <tr>
                    <td>principal</td>
                    <td>{useFormatNumber(paymentPrincipal)}</td>
                  </tr>
                  <tr>
                    <td>interest</td>
                    <td>{useFormatNumber(paymentInterest)}</td>
                  </tr>
                </tbody>
              </table>
          </Section>
      </div>
    )
  }