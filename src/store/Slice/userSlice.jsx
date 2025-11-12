import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { base_url } from "../../utils/constant";

export const get_state_list = createAsyncThunk("state", async (data) => {
  try {
    const body = new FormData();
    body.append("action", "state");
    const response = await fetch(base_url + 'insugo/' + "state.php", {
      method: "POST",
      body: body,
    });
    const res = await response.json();
    return res;
  } catch (error) {
    console.log("error =====", error);
  }
});
export const get_city_list = createAsyncThunk("city_list", async (data) => {
  try {
    const body = new FormData();
    body.append("action", "state");
    const response = await fetch(base_url + 'insugo/' + "city.php", {
      method: "POST",
      body: body,
    });
    const res = await response.json();
    return res;
  } catch (error) {
    console.log("error =====", error);
  }
});

export const update_contact_form = createAsyncThunk(
  "update_contact_form",
  async (data) => {
    try {
      const body = new FormData();
      body.append("action", "create");
      const response = await fetch(base_url + 'insugo/' + "contact.php", {
        method: "POST",
        body: body,
      });
      const res = await response.json();
      return res;
    } catch (error) {
      console.log("error =====", error);
    }
  }
);

const initialState = {
  state_list: [],
  city_list: [],
};

const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(get_state_list.fulfilled, (action, state) => {
      const data = action.payload;
      if (data.success) {
        state.state_list = data.state;
      }
    });
    builder.addCase(get_city_list.fulfilled, (action, state) => {
      const data = action.payload;
      if (data.success) {
        state.city_list = data.city;
      }
    });
  },
});

export default UserSlice.reducer;
