import {useState, useEffect} from "react";
import useFormatNumber from "../../../hooks/useFormatNumber";
import Section from "../../Section";
import Input from "../../Form/Input";

export default function Affordable() {
  const defaultConfig = {I: 60000,d: 70000,r: 3,n: 30,p: 1500};
  const [params,setParams] = useState(defaultConfig);
  const [mortgageAmount,setMortgageAmount] = useState(0);
  const paymentInterest = Math.round((params.r / 1200 * mortgageAmount)*100)/100;
  const paymentPrincipal = paymentInterest;
  const homePrice = mortgageAmount + params.d;
  // add property taxes
  // add mortgage insurance
  // add hazard insurance

  console.log(paymentInterest);
  console.log(paymentPrincipal);

  // M = P[r(1+r)^n/((1+r)^n)-1)]

  // 

  const calculateMortgage = (payment,rate,term) => {
    const r = rate / 100 / 12;
    const n = term * 12;
    const m = payment;

    const maxMortgage = Math.round(m/((r * ((1 + r) ** n))/(((1 + r) ** n) - 1))*100)/100;
    console.log(m)
    console.log(((r * ((1 + r) ** n))/(((1 + r) ** n) - 1)))
    // console.log(p + "[" + r + "(1 + " + r + ")^" + n + "/((1+" + r + ")^" + n + ")-1)]");
    setMortgageAmount(maxMortgage);
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
    calculateMortgage(1500,params.r,params.n);
  });


    return (
      <div>
        <Section direction="column">
          <div style={{marginTop: "60px"}}/>
          <h2>
            how much house can i afford?
          </h2>
        </Section>
        <Section direction="column">
              <form style={{display: "flex",justifyContent: "center"}}>
                <table>
                  <tbody>
                    <Input label="annual income" size="medium" placeholder={defaultConfig.I} type="number" cb={(event)=>handleParams("I",event.target.value)}/>
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
                    <td className="altText">home price</td>
                    <td className="altText">${useFormatNumber(homePrice)}</td>
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