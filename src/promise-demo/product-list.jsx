import { useEffect, useState } from "react"
export default function ProductList(props) {

    const initialState = {
        products: []
    }

    const [state, setState] = useState(initialState);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products?limit=5');
                const { products } = await res.json();
                setState({ ...state, products });
            } catch (err) {
                console.log('error: ', err);
            }

        }

        loadProducts();

    }, [])

    return (
        <div>
            <h1>Your list of products</h1>
            {
                state.products.map(({id, title}) => <div key={id}>{title}</div>)
            }
        </div>
    )
}