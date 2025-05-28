import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'

const APIData = () => {
    const { data, loading, error } = useSelector((state: RootState) => state.api)
  return (
    <div>
        <div>
        <h4>API Data</h4>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <ul>
          {data.slice(0, 10).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default APIData