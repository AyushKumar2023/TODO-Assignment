import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api/axios";

export const fetchTasks = createAsyncThunk("tasks/fetch", async () => {
  const res = await API.get("/tasks");
  return res.data;
});

export const createTask = createAsyncThunk("tasks/create", async (data) => {
  const res = await API.post("/tasks/create", data);
  return res.data;
});

export const deleteTask = createAsyncThunk("tasks/delete", async (id) => {
  const res = await API.post("/tasks/delete", { id });
  return res.data;
});

export const toggleTask = createAsyncThunk("tasks/toggle", async (id) => {
  const res = await API.post("/tasks/toggle", { id });
  return res.data;
});

export const updateDescription = createAsyncThunk("tasks/update", async (data) => {
  const res = await API.post("/tasks/update-description", data);
  return res.data;
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.list = action.payload.tasks || [];
      });
  },
});

export default taskSlice.reducer;
