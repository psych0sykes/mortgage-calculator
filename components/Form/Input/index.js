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
        // justifyContent: "center",
    };

    const inputStyle = {
      width: size(),
    }

    return (
      <tr>
          <td style={{marginRight: "10px"}}>{props.label}</td>
          <td style={style}>
            <input attr={props.label} type={props.type} style={inputStyle} onChange={props.cb} value={props.value} placeholder={props.placeholder}/>
            <div style={{marginLeft: "5px"}}>{props.tail}</div>
          </td>
      </tr>
    )
  };