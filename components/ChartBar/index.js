export default function ChartBar(props) {

    const barStyle = {
        height: "75px",
        width: "300px",
        display: "flex",
        flexDirection: "row",
        display: "none",
    };

    const totalBar = {
        name: "mortgage payment",
        amount: 1500
    };

    const sliceArray = [
        {name: "principal",amount: 300,},
        {name: "interest",amount: 900,},
        {name: "home insurance",amount: 50,},
        {name: "property taxes",amount: 100,},
        {name: "mortgage insurance",amount: 150,},
    ];

    return (
      <div style={barStyle}>
          <div style={{height: "100%",width: "20%",backgroundColor: "red"}}></div>
          <div style={{height: "100%",width: "20%",backgroundColor: "orange"}}></div>
          <div style={{height: "100%",width: "20%",backgroundColor: "yellow"}}></div>
          <div style={{height: "100%",width: "20%",backgroundColor: "green"}}></div>
          <div style={{height: "100%",width: "20%",backgroundColor: "blue"}}></div>
      </div>
    )
  };