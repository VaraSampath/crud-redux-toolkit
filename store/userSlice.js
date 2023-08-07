import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://64ca940b700d50e3c70514bd.mockapi.io/users",
        data
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.toString());
    }
  }
);
export const editUser = createAsyncThunk(
  "editUser",
  async (data, { rejectWithValue }) => {
    console.log(data);

    try {
      const response = await axios.put(
        `https://64ca940b700d50e3c70514bd.mockapi.io/users/${data.id}`,
        data
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.toString());
    }
  }
);

export const readUsers = createAsyncThunk("readUsers", async () => {
  try {
    const response = await axios.get(
      "https://64ca940b700d50e3c70514bd.mockapi.io/users"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const deleteUser = createAsyncThunk("deleteUser", async (id) => {
  try {
    const response = await axios.delete(
      `https://64ca940b700d50e3c70514bd.mockapi.io/users/${id}`
    );
    return id;
  } catch (error) {
    console.log(error);
  }
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(editUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = state.users.map((each) => {
        if (each.id === action.payload.id) {
          return action.payload;
        } else {
          return each;
        }
      });
    });
    builder.addCase(editUser.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(readUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(readUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(readUsers.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      const id = action.payload;
      state.users = state.users.filter((each) => each.id !== id);
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
