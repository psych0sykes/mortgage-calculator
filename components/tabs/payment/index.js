import {useState, useEffect} from "react";
import useFormatNumber from "../../../hooks/useFormatNumber";
import Section from "../../Section";
import Input from "../../Form/Input";

export default function Payment() {
  const defaultConfig = {h: 350000,d: 70000,r: 3,n: 30,i: 1500,t: 1,mi: 1.05};
  const [params,setParams] = useState(defaultConfig);
  const [principalAndInterest,setPrincipalAndInterest] = useState(0);
  const mortgageAmount = params.h - params.d;
  const ltv = Math.round(mortgageAmount / params.h * 10000) / 100;
  const paymentInterest = Math.round((params.r / 1200 * mortgageAmount)*100)/100;
  const paymentPrincipal = principalAndInterest - paymentInterest;
  const mortgageInsurance = ltv > 80 ? Math.round(params.mi * mortgageAmount / 12) / 100 : 0;
  const propertyTax = Math.round(params.t / 12 * mortgageAmount) / 100;
  const homeInsurance = params.i / 12;
  const mortgagePayment = principalAndInterest + propertyTax + homeInsurance + mortgageInsurance;

  // M = P[r(1+r)^n/((1+r)^n)-1)]

  const calculatePayment = (principal,rate,term) => {
    const p = principal;
    const r = rate / 100 / 12
    const n = term * 12;

    const payment = Math.round(p * ((r * ((1 + r) ** n))/(((1 + r) ** n) - 1)) * 100)/100;
    // console.log(p + "[" + r + "(1 + " + r + ")^" + n + "/((1+" + r + ")^" + n + ")-1)]");
    setPrincipalAndInterest(payment);
    // setPaymentInterest(params.r / 1200 * mortgageAmount);
    // setPaymentPrincipal(principalAndInterest - paymentInterest);
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
                    <Input label="home price" size="medium" placeholder={useFormatNumber(params.h)} type="number" cb={(event)=>handleParams("h",event.target.value)}/>
                    <Input label="down payment" size="medium" placeholder={useFormatNumber(params.d)} type="number" cb={(event)=>handleParams("d",event.target.value)}/>
                    <Input label="interest rate" tail="%" size="small" placeholder={useFormatNumber(params.r)} type="number" cb={(event)=>handleParams("r",event.target.value)}/>
                    <Input label="term length" tail="years" size="small" placeholder={useFormatNumber(params.n)} type="number" cb={(event)=>handleParams("n",event.target.value)}/>
                    <Input label="home insurance" tail="annually" size="medium" placeholder={useFormatNumber(params.i)} type="number" cb={(event)=>handleParams("i",event.target.value)}/>
                    <Input label="property tax rate" tail="%" size="small" placeholder={useFormatNumber(params.t)} type="number" cb={(event)=>handleParams("t",event.target.value)}/>
                    <tr>
                      <td>LTV</td>
                      <td>{ltv}%</td>
                    </tr>
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
                    <td>{"principal & interest"}</td>
                    <td>{useFormatNumber(principalAndInterest)}</td>
                  </tr>
                  <tr>
                    <td>home insurance</td>
                    <td>{useFormatNumber(homeInsurance)}</td>
                  </tr>
                  <tr>
                    <td>property tax</td>
                    <td>{useFormatNumber(propertyTax)}</td>
                  </tr>
                  <tr>
                    <td>mortgage insurance</td>
                    <td>{useFormatNumber(mortgageInsurance)}</td>
                  </tr>
                </tbody>
              </table>
          </Section>
      </div>
    )
  }