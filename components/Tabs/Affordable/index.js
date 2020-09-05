import {useState, useEffect} from "react";
import useFormatNumber from "../../../hooks/useFormatNumber";
import Section from "../../Section";
import InputTable from "../../Form/InputTable";
import Input from "../../Form/Input";

export default function Affordable() {
  const defaultConfig = {I: 60000,D: 70000,r: 3,n: 30,f: 36,b: 43,d: 300,t: 1,m: 1.05,h: 0.6};
  const [params,setParams] = useState(defaultConfig);
  const [mortgageAmount,setMortgageAmount] = useState(0);
  const [inputMoreDetail,setInputMoreDetail] = useState(true);
  const [homePrice,setHomePrice] = useState(0);
  const frontEndRatio = Math.round(params.f * params.I / 12) / 100;
  const backEndRatio = Math.round(params.b * ((params.I / 12) - params.d) / 100)
  const mortgagePayment = Math.min(frontEndRatio,backEndRatio);
  const paymentInterest = Math.round((params.r / 1200 * mortgageAmount)*100)/100;
  const paymentPrincipal = mortgagePayment - paymentInterest;

  const calculateMortgage = (payment,rate,term) => {
    const r = rate / 100 / 12;
    const n = term * 12;
    const M = payment;
    const t = params.t / 1200;
    const h = params.h / 1200;
    const m = params.m / 1200;

    const maxMortgage = (Math.round(M/((r * ((1 + r) ** n))/(((1 + r) ** n) - 1) + t + h + m)*100)/100);

    setMortgageAmount(maxMortgage);
    setHomePrice(maxMortgage + params.D)
  }

  const handleParams = (title,value) => {
    let newParams = {
      ...params,
      [title]: value,
    };
    setParams(newParams)
  }

  useEffect(() => {
    calculateMortgage(mortgagePayment,params.r,params.n);
  });

  const standardInputs = [
    {
      label: "annual income",
      size: "medium",
      type: "number",
      paramId: "I"
    },
    {
      label: "monthly debt",
      size: "medium",
      type: "number",
      paramId: "d"
    },
    {
      label: "down payment",
      size: "medium",
      type: "number",
      paramId: "D"
    },
    {
      label: "interest rate",
      tail: "%",
      size: "small",
      type: "number",
      paramId: "r"
    },
    {
      label: "term length",
      tail: "years",
      size: "small",
      type: "number",
      paramId: "n"
    }
  ];
  const extraInputs = [
    {
      label: "annual property tax",
      tail: "%",
      size: "small",
      type: "number",
      paramId: "t"
    },
    {
      label: "annaul home insurance",
      tail: "%",
      size: "small",
      type: "number",
      paramId: "h",
    },
    {
      label: "mortgage insurance",
      tail: "%",
      size: "small",
      type: "number",
      paramId: "m"
    }
  ]

  // <Input label="annual property tax" tail="%" size="small" placeholder={useFormatNumber(params.t)} type="number" cb={(event)=>handleParams("t",event.target.value)}/>
  // <Input label="annual home insurance" tail="%" size="small" placeholder={useFormatNumber(params.h)} type="number" cb={(event)=>handleParams("h",event.target.value)}/>
  // <Input label="mortgage insurance" tail="%" size="small" placeholder={useFormatNumber(params.m)} type="number" cb={(event)=>handleParams("m",event.target.value)}/>

    return (
      <div>
        <Section direction="column">
          <div style={{marginTop: "60px"}}/>
          <h2>
            how much home can i afford?
          </h2>
        </Section>
        <Section direction="column">
              <InputTable params={params} standardInputs={standardInputs} handleParams={handleParams}/>
              <div style={{marginTop: "60px"}}/>
              <table>
                <tbody>
                  <tr style={{fontSize: "20px"}}>
                    <td className="altText">home price</td>
                    <td className="altText">${useFormatNumber(homePrice)}</td>
                  </tr>
                  <tr>
                    <td>mortgage amount</td>
                    <td>{useFormatNumber(mortgageAmount)}</td>
                  </tr>
                  <tr>
                    <td>monthly payment</td>
                    <td>{useFormatNumber(mortgagePayment)}</td>
                  </tr>
                  <tr>
                    <td>principal</td>
                    <td>{useFormatNumber(paymentPrincipal)}</td>
                  </tr>
                  <tr>
                    <td>interest</td>
                    <td>{useFormatNumber(paymentInterest)}</td>
                  </tr>
                  <tr>
                    <td>propert tax</td>
                    <td>{useFormatNumber(Math.round(params.t * mortgageAmount / 12) / 100)}</td>
                  </tr>
                  <tr>
                    <td>home insurance</td>
                    <td>{useFormatNumber(Math.round(params.h * mortgageAmount / 12) / 100)}</td>
                  </tr>
                  <tr>
                    <td>mortgage insurance</td>
                    <td>{useFormatNumber(Math.round(params.m * mortgageAmount / 12) / 100)}</td>
                  </tr>
                </tbody>
              </table>
          </Section>
      </div>
    )
  }