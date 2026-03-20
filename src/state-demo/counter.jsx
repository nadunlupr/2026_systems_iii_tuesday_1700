import { useState } from 'react';

export function Counter() {

    const intialState = {
        count: 0,
        text: undefined
    }

    const [state, setState] = useState(intialState);

    // const [count, setCount] = useState(0);
    // const [text, setText] = useState('');
    // const count = arr[0];
    // const setCount = arr[1];

    const handleButtonClick = () => {
        setState({
            ...state,
            count: state.count + 1
        });
    }

    return (
        <div>
            <button onClick={() => handleButtonClick()}>Click Me!</button>
            <p>You Clicked me {state.count} times</p>
            <input type='text' value={state.text} onChange={({
                target: {
                    value
                } = {}
            }) => setState({...state, text: value})} />
            <p>{state.text}</p>
        </div>
    )
}
