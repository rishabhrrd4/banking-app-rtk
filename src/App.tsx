import styles from "./App.module.css";
import { useDispatch } from "react-redux";
import { fetchData } from "./features/api/apiSlice";
import type { AppDispatch } from "./store/store";
import { useEffect } from "react";
import Bank from "./components/Bank";
import APIData from "./components/APIData";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/" element={<Bank />} />
        <Route path="/api" element={<APIData />} />
      </Routes>
    </div>
  );
};

export default App;
