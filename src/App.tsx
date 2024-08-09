import React, { useState } from 'react';

const App: React.FC = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>Counter</h1>
			<p data-testid='count'>{count}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={() => setCount(count - 1)}>Decrement</button>
		</div>
	);
};

export default App;
