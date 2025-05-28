import { useSelector } from "react-redux";
import styles from "../App.module.css";
import type { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

const APIData = () => {
  const { data, loading, error } = useSelector((state: RootState) => state.api);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1)
  }
  return (
    <div className={styles.apiContainer}>
      <h4>API Data</h4>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {data.slice(0, 10).map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button className={styles.button} onClick={handleClick}>Back</button>
    </div>
  );
};

export default APIData;
