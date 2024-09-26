import { useState } from 'react'
import './App.css'
import Parent from './components/Parent'
import { WrapperContext } from './WrapperContext'

function App() {
	const [isShow, setShow] = useState(true)
	const [values, setValues] = useState({
		name: 'Carlos',
		lastName: 'Maza',
		phone: null
	})

	const methods = {
		isShow,
		setShow,
		values,
		setValues
	}

	return (
		<div className='App'>
			<button
				onClick={() => setShow(!isShow)}
				type='button'>
				{isShow ? 'show' : 'hide'} values
			</button>
			<WrapperContext methods={methods}>
				<Parent />
			</WrapperContext>
		</div>
	)
}

export default App
