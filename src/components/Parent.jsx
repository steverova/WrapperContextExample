import { useEffect } from 'react'
import { useMethodsContext } from '../WrapperContext'
import Child from './Child'

const Parent = () => {
	const { setValues } = useMethodsContext()

	useEffect(() => {
		setValues((prev) => ({
			...prev,
			phone: 123456789
		}))
	}, [])

	return (
		<div>
			Parent
			<Child />
		</div>
	)
}
export default Parent
