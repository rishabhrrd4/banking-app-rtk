import { setAmount, deposit, withdraw } from "../features/bank/bankSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import styles from "../App.module.css";
import { useNavigate } from "react-router-dom";

const Bank = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/api");
  };
  const dispatch = useDispatch<AppDispatch>();
  const { balance, amount } = useSelector((state: RootState) => state.bank);
  return (
    <div>
      <div className={styles.card}>
        <h1 className={styles.title}>🏦 My Bank</h1>
        <p className={styles.balance}>Balance: ₹{balance.toFixed(2)}</p>
        <input
          className={styles.input}
          type="number"
          value={amount}
          placeholder="Enter amount"
          onChange={(e) => dispatch(setAmount(Number(e.target.value)))}
        />
        <div className={styles.buttons}>
          <button
            className={styles.depositBtn}
            onClick={() => dispatch(deposit())}
          >
            Deposit
          </button>
          <button
            className={styles.withdrawBtn}
            onClick={() => dispatch(withdraw())}
          >
            Withdraw
          </button>
        </div>
      </div>
      <button className={styles.button} onClick={handleClick}>Fetch Data</button>
    </div>
  );
};

export default Bank;
