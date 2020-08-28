import Section from "../components/Section";
import Input from "../components/Form/Input";
import {useState} from "react";
import useFormatNumber from "../hooks/useFormatNumber";
import Payment from "../components/Tabs/Payment";

export default function Home() {

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
            <Payment/>
          </Section>
      </Section>
    </div>
  )
}
