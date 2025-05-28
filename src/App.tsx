import styles from "./App.module.css";
import { useDispatch } from "react-redux";
import { fetchData } from "./features/api/apiSlice";
import type { AppDispatch } from "./store/store";
import { useEffect } from "react";
import Bank from "./components/Bank";
import APIData from "./components/APIData";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <div className={styles.wrapper}>
      <Bank />
      <APIData />      
    </div>
  );
};

export default App;
