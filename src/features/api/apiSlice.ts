import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  id: string;
  name: string;
}

export const fetchData = createAsyncThunk("api/fetchData", async () => {
  const res = await axios.get<User[]>(
    "https://67e37dcd2ae442db76d04eaa.mockapi.io/users"
  );
  return res.data;
});

const apiSlice = createSlice({
  name: "api",
  initialState: {
    data: [] as User[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export default apiSlice.reducer;
