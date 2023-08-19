import { useState } from "react";
import Input from "../Input/Input";
import Output from "../Output/Output";

const TipCalculator = () => {
  const [list, setList] = useState([]); // this state is for storing the customer list with name and tip
  const [text, setText] = useState(""); //this state is for the amount of bill
  const [inp, setInp] = useState("");  //this state is for the name of the customer
  const [tipPercent, setTipPercent] = useState(null);  // this state is for storing the value of selected tip
  const [customer, setCustomer] = useState(0); // this state i made to count the number of people who give the tip
  const [totalTip, setTotalTip] = useState([]); //this is a array of tip where i am storing the number of tip
  const [add,setAdd] = useState(0)    //this state i made to add the tip 

  const handleChange = (str) => {
    return setText(str);
  };
  const handleChangeName = (val) => {
    return setInp(val);
  };
  const tipHandler = (e) => {
    return setTipPercent(e);
  };

  //calculation the tip
  let total = text * tipPercent;

//   console.log(totalTip);

//   const sum = totalTip.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   });
//   console.log(sum);

  return (
    <>
      <Input
        handleChange={handleChange}
        inputValue={text}
        inputValue2={inp}
        tipHandler={tipHandler}
        btnClickHandler={() => {
          let itemList = [...list];
          itemList.push(`The customer ${inp} has paid ${total}`);
          setList(itemList);
          setText("");
          setInp("");
          let value = [...totalTip];
          value.push(total);
          setTotalTip(value);
        }}
        handleChangeName={handleChangeName}
      />
      <Output
        list={list}
        add={add} // sending this props to output to show the add value
        totalTip={totalTip}
        customer={customer}
        calculateTipHandler={() => {
          setCustomer(list.length)  // this is counting the customer
          //this function i made to add sum of tip
          const sum = totalTip.reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
              });
              setAdd(sum)
        }}
      />
    </>
  );
};
export default TipCalculator;
