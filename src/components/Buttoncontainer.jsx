import styles from "./Buttoncontainer.module.css";
const Buttoncontainer = ({ handleOnClick, buttonNames }) => {
  
  return (
    <>
      <div className={styles.container}>
        {buttonNames.map((items) => (
          <button value={items} key={items} className={styles.button} onClick={handleOnClick}>
            {items}
          </button>
        ))}
      </div>
    </>
  );
};

export default Buttoncontainer;
