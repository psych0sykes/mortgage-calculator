import Section from "../../components/Section";

export default function NavTabs() {

    const handleNavTab = (url) => {
        window.location.assign(url);
    }

  return (
    <div>
          <Section>
              <div className="navTab" onClick={()=>handleNavTab("/")}>monthly payment</div>
              <div className="navTab" onClick={()=>handleNavTab("/howmuchhome")}>how much home?</div>
              {/* <div className="navTab">monthly income</div> */}
          </Section>
    </div>
  )
}