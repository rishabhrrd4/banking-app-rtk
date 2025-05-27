import { useDispatch, useSelector } from "react-redux"
import { deposit, setAmount, withdraw } from "./features/bank/bankSlice"
import type { RootState } from "./store/store"

const App = () => {
  const dispatch = useDispatch()
  const {amount, balance} = useSelector((state: RootState) => state.bank)

  return (
    <div>
      <h1>Bank</h1>
      <h2>Balance: {balance}</h2>
      <input type="number" placeholder="Enter amount" value={amount} onChange={(e) => dispatch(setAmount(e.target.value))} />
      <button onClick={() => dispatch(deposit())}>Deposit</button>
      <button onClick={() => dispatch(withdraw())}>Withdraw</button>
    </div>
    
  )
}

export default App