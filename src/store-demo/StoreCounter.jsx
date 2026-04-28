import { counterDecrement, counterIncrement } from "../store/actionTypes";
import { useStore } from "../store/StoreProvider"

export default function StoreCounter(props) {
    const [store, dispatch] = useStore();
    
    const handleIncrement = () => {
        const action = {
            type: counterIncrement,
        }
        dispatch(action);
    }
    const handleDecrement = () => {
        dispatch({
            type: counterDecrement
        })
    }
    return (
        <div>
            <button onClick={() => handleIncrement()} >Increment</button>
            <button onClick={() => handleDecrement()} >Decrement</button>
            {store.counterValue}
        </div>
    )
}