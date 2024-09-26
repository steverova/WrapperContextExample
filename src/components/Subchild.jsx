import { useMethodsContext } from '../WrapperContext'

const SubChild = () => {
	const { isShow, values } = useMethodsContext()
	const { name, phone } = values

	return <div> subChild {isShow && `Hello ${name} - ${phone}`} </div>
}
export default SubChild
