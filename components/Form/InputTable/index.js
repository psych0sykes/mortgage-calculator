import useFormatNumber from "../../../hooks/useFormatNumber";
import Input from "../Input";
import { render } from "react-dom";

export default function InputTable(props) {
    const showDetail = props.showDetail ? true : false;
    const handleParams = props.handleParams;
    const params = props.params ? props.params : {};

    const standardInputsArray = props.standardInputs ? props.standardInputs : [];
    const extraInputsArray = props.extraInputs ? props.extraInputs : [];
    const testArray = [
        {
            label: "annual income",
            size: "medium",
            placeholder: params.I,
            type: "number",
            paramId: "I"
        }
    ]

    const renderInputs = (array) => {
        return(
            array.map((item) =>{
                return(
                    <Input key={item.paramId} label={item.label} tail={item.tail} size={item.size} placeholder={useFormatNumber(params[item.paramId])} type={item.type} cb={(event)=>handleParams(item.paramId,event.target.value)}/>
                )
            })
        )};


    return (
        <form style={{display: "flex",justifyContent: "left"}}>
          <table>
            <tbody>
                {renderInputs(standardInputsArray)}
              <tr>
                <td>
                  more
                </td>
              </tr>
              <Input label="annual property tax" tail="%" size="small" placeholder={useFormatNumber(params.t)} type="number" cb={(event)=>handleParams("t",event.target.value)}/>
              <Input label="annual home insurance" tail="%" size="small" placeholder={useFormatNumber(params.h)} type="number" cb={(event)=>handleParams("h",event.target.value)}/>
              <Input label="mortgage insurance" tail="%" size="small" placeholder={useFormatNumber(params.m)} type="number" cb={(event)=>handleParams("m",event.target.value)}/>
              <tr>
                <td>
                  less
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      )
  }