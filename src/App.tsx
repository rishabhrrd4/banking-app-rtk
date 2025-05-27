import styles from "./App.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deposit, withdraw, setAmount } from "./features/bank/bankSlice";
import type { RootState } from "./store/store";
const App = () => {
  const { balance, amount } = useSelector((state: RootState) => state.bank);
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
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
          <button className={styles.depositBtn} onClick={() => dispatch(deposit())}>
            Deposit
          </button>
          <button className={styles.withdrawBtn} onClick={() => dispatch(withdraw())}>
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
