import Section from "../components/Section";
import Input from "../components/Form/Input";
import {useState} from "react";
import useFormatNumber from "../hooks/useFormatNumber";

export default function Home() {

  const [mortgageAmount,setMortgageAmount] = useState(100000)

  return (
    <div>
      <Section direction="column">
          <h1>
            mortgage calculator
          </h1>
          <Section>
              <div className="navTab">monthly payment</div>
              <div className="navTab">home price</div>
              <div className="navTab">monthly income</div>
          </Section>
          <Section>
              <form>
                <Input label="mortgage amount" size="medium" type="number" cb={(event)=>setMortgageAmount(event.value)} value={mortgageAmount}/>
                <Input label="interest rate" size="small" type="number"/>
                <Input label="term length" size="small" type="text"/>
              </form>
          </Section>
      </Section>
    </div>
  )
}
