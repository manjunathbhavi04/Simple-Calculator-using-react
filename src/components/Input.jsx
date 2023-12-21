import styles from "./Input.module.css";

const Input = ({ handleOnChange, newValue }) => {
  return (
    <input
      className={styles.display}
      value = {newValue}
      type="text"
      placeholder="Enter here"
      onChange={handleOnChange}
    />
  );
};

export default Input;
