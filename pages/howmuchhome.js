import Section from "../components/Section";
import Affordable from "../components/Tabs/Affordabie";
import NavTabs from "../components/NavTabs";

export default function HowMuchHome() {

  return (
    <div>
      <Section direction="column">
          <h1>
            mortgage calculator
          </h1>
          <NavTabs/>
          <Section>
            <Affordable/>
          </Section>
      </Section>
    </div>
  )
}