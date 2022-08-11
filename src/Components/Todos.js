import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../Services/actions/todosAction";

const Todos = () => {
	const { isLoading, error, todos } = useSelector((state) => state);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllTodos());
	}, [dispatch]);
	return (
		<div>
			<h2>Todos app</h2>
			{isLoading && <h2>Loading....</h2>}
			{error && <h2>{error}</h2>}
			<section>
				{todos &&
					todos.map((todo) => {
						return (
							<article key={todo.id}>
								<h4>{todo.id}</h4>
								<h4>{todo.title}</h4>
							</article>
						);
					})}
			</section>
		</div>
	);
};

export default Todos;
