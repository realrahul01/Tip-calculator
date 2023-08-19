/* eslint-disable react/prop-types */
import styles from "./Input.module.css";
// eslint-disable-next-line react/prop-types
const Input = ({
  handleChange,
  inputValue,
  btnClickHandler,
  handleChangeName,
  inputValue2,
  tipHandler
}) => {


  return (
    <div className={styles.Inp}>
      <h3 className={styles.h3}>Enter your bill amount</h3>
      <input
        type="number"
        className={styles.input}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        value={inputValue}              
        placeholder="Enter the Number"
      />

      <hr className={styles.hr} />
      <label htmlFor="name">How was the service</label>
      <select name="tip" className={styles.btn} onChange={(e)=>tipHandler(e.target.value)}>
        <option>Choose</option>
        <option value="0.20">Excellent</option>
        <option value="0.10">Medium</option>
        <option value="0.5">Poor</option>
      </select>
      <input
        type="text"
        value={inputValue2}
        onChange={(e) => {
          return handleChangeName(e.target.value);
        }}
        placeholder="Customer Name"
      />
      <button
        className={styles.btn}
        onClick={() => {
          btnClickHandler();
        }}
      >
        Add customer
      </button>
    </div>
  );
};
export default Input;
