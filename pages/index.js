import Section from "../components/Section";

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
      </Section>
    </div>
  )
}
