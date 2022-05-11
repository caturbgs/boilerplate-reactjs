import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {decrement, decrementByValue, increment, incrementByValue, reset} from '../features/counter/counterSlice';

const ExampleRedux = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
	const [incrementAmount, setIncrementAmount] = useState(2);

	const handleIncrement = () => {
		dispatch(increment());
	};

	const handleDecrement = () => {
		dispatch(decrement());
	};

	const handleChangeInputValue = (e) => {
		setIncrementAmount(e.target.value);
	};

	const handleIncrementByValue = () => {
		dispatch(incrementByValue(Number(incrementAmount)));
	};

	const handleDecrementByValue = () => {
		dispatch(decrementByValue(Number(incrementAmount)));
	};

	const handleReset = () => {
		dispatch(reset());
	};

	return (
		<div className="App">
			<div className="min-w-full min-h-screen">
				<div className="flex flex-col justify-center items-center py-20">
					<div className="text-2xl">{count}</div>
					<div className="flex justify-between mt-10">
						<button
							className="bg-red-500 mx-2 w-10 h-10 text-white"
							type="button"
							onClick={handleDecrement}>
							-
						</button>
						<button
							className="bg-blue-500 mx-2 w-10 h-10 text-white"
							type="button"
							onClick={handleIncrement}>
							+
						</button>
					</div>
					<div className="flex justify-between mt-10">
						<input
							value={incrementAmount}
							className="border-2 border-fuchsia-700 focus:border-2 focus:border-red-700 px-1 h-10"
							onChange={handleChangeInputValue}
						/>
					</div>
					<div className="flex justify-between mt-10">
						<button
							className="bg-emerald-500 mx-2 min-w-10 h-10 px-2 text-white"
							type="button"
							onClick={handleIncrementByValue}>
							Add Amount
						</button>
						<button
							className="bg-emerald-500 mx-2 min-w-10 h-10 px-2 text-white"
							type="button"
							onClick={handleDecrementByValue}>
							Subtract Amount
						</button>
						<button
							className="bg-emerald-500 mx-2 min-w-10 h-10 px-2 text-white"
							type="button"
							onClick={handleReset}>
							Reset Amount
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExampleRedux;
