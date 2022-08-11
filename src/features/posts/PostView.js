import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostView = () => {
	const { isLoading, posts, error } = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);
	return (
		<div>
			<h2>Posts</h2>
			{isLoading && <h2>Loading....</h2>}
			{error && <h2>{error}</h2>}
			<section>
				{posts &&
					posts.map((post) => {
						return (
							<article key={post.id}>
								<h4>{post.id}</h4>
								<h4>{post.title}</h4>
							</article>
						);
					})}
			</section>
		</div>
	);
};

export default PostView;
