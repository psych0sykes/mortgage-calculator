import Section from "../components/Section";
import Payment from "../components/Tabs/Payment";
import NavTabs from "../components/NavTabs";

export default function Home() {

  return (
    <div>
      <Section direction="column">
          <h1>
            mortgage calculator
          </h1>
          <NavTabs/>
          <Section>
            <Payment/>
          </Section>
          <footer></footer>
      </Section>
    </div>
  )
}
