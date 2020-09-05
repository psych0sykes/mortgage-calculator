import NavTabs from "../components/NavTabs";
import Section from "../components/Section";
import Affordable from "../components/Tabs/Affordable";

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
          <footer></footer>
      </Section>
    </div>
  )
}