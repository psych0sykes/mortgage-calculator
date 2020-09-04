import Section from "../components/Section";
import Input from "../components/Form/Input";
import {useState} from "react";
import useFormatNumber from "../hooks/useFormatNumber";
import Payment from "../components/Tabs/Payment";
import Affordable from "../components/Tabs/Affordabie";

export default function Home() {

  const [activeTab,setActiveTab] = useState("payment")

  const Tabs = (props) => {
    switch(props.tab){
      case "payment":
        return <Payment/>;
      case "affordable":
        return <Affordable/>;
    }
  };

  const handleNavTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Section direction="column">
          <h1>
            mortgage calculator
          </h1>
          <Section>
              <div className="navTab" onClick={()=>handleNavTab("payment")}>monthly payment</div>
              <div className="navTab" onClick={()=>handleNavTab("affordable")}>how much home?</div>
              {/* <div className="navTab">monthly income</div> */}
          </Section>
          <Section>
            <Tabs tab={activeTab}/>
          </Section>
      </Section>
    </div>
  )
}
