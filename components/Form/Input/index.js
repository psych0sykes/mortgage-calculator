export default function CenterInput(props) {

    const size = () =>{
      switch(props.size) {
        case "small":
            return "50px"
        case "medium":
            return "100px"
        case "large":
            return "150px"
      }
    };

    const style={
        display: "flex",
        justifyContent: "center",
        paddingTop: "15px",
    };

    const inputStyle = {
      width: size(),
    }

    return (
      <div style={style}>
          <div style={{marginRight: "10px"}}>{props.label}</div>
          <input attr={props.label} type={props.type} style={inputStyle} onChange={props.cb} value={props.value}></input>
      </div>
    )
  };