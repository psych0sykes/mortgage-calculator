export default function useFormatNumber(number){
    const newNumber = new Intl.NumberFormat("en-US",{style: "decimal",currency: "USD",}).format(number);
    // console.log(newNumber);
    return newNumber;
};