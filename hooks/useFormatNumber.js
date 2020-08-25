export default function useFormatNumber(number){
    const newNumber = new Intl.NumberFormat().format(number);
    // console.log(newNumber);
    return newNumber;
};