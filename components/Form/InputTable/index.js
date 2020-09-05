import useFormatNumber from "../../../hooks/useFormatNumber";
import Input from "../Input";

export default function InputTable(props) {
    const showDetail = props.showDetail ? true : false;
    const handleParams = props.handleParams;
    const params = props.params ? props.params : {}


    return (
        <form style={{display: "flex",justifyContent: "left"}}>
          <table>
            <tbody>
              <Input label="annual income" size="medium" placeholder={useFormatNumber(params.I)} type="number" cb={(event)=>handleParams("I",event.target.value)}/>
              <Input label="monthly debt" size="medium" placeholder={useFormatNumber(params.d)} type="number" cb={(event)=>handleParams("d",parseInt(event.target.value))}/>
              <Input label="down payment" size="medium" placeholder={useFormatNumber(params.D)} type="number" cb={(event)=>handleParams("D",parseInt(event.target.value))}/>
              <Input label="interest rate" tail="%" size="small" placeholder={useFormatNumber(params.r)} type="number" cb={(event)=>handleParams("r",event.target.value)}/>
              <Input label="term length" tail="years" size="small" placeholder={useFormatNumber(params.n)} type="number" cb={(event)=>handleParams("n",event.target.value)}/>
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