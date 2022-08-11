const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");
export const fetchPosts = createAsyncThunk("posts/fetchUPosts", async () => {
	const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
	return res.data;
});
const postSlice = createSlice({
	name: "posts",
	initialState: {
		isLoading: false,
		posts: [],
		error: null,
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPosts.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.isLoading = false;
			state.posts = action.payload;
			state.error = null;
		});
		builder.addCase(fetchPosts.rejected, (state, action) => {
			state.isLoading = false;
			state.posts = [];
			state.error = action.error.massage;
		});
	},
});

export default postSlice.reducer;
