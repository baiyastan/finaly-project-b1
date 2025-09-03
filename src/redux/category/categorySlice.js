import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../axios/apiClient";
 

export const getCategory = createAsyncThunk(
    "category/fetch",
    async (_, {rejectWithValue}) =>{
        try {
            const res = await apiClient.get(`/products/category-list`)
            return res.data
        } catch (error) {
            return rejectWithValue(error.message || "not found")
        }
    }
)

const categorySlice = createSlice({
    name: "category",
    initialState: {
        list: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategory.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }  
})

export default categorySlice.reducer