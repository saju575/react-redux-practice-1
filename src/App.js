import CounterView from "../src/features/counter/CounterView";
import "./App.css";
import PostView from "./features/posts/PostView";
function App() {
	return (
		<div>
			{/* <Counter /> */}
			{/* <Todos /> */}
			<CounterView />
			<PostView />
		</div>
	);
}

export default App;
