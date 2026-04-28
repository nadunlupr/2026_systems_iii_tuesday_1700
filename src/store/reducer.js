import { counterDecrement, counterIncrement } from "./actionTypes"

export const initialState = {
    counterValue: 0,
    address: {
        street: '',
        houseNumber: 1
    }
}

// export function reducer() {}
export const reducer = (state, action) => {
    switch (action.type) {
        case counterIncrement:
            return {
                ...state,
                counterValue: state.counterValue + 1
            }
        case counterDecrement:
            return {
                ...state,
                counterValue: state.counterValue - 1
            }
        default:
            return { ...state }
    }
}