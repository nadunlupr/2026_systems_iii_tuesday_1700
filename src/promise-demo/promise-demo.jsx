import { useEffect, useState } from "react";
import ProductList from "./product-list";

export default function PromiseDemo(props) {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    useEffect(() => {
        console.log('inside useEffect');

        const callPizzaPromise = async () => {
            try {
                const res = await pizzaPromise;
                console.log('resolved: ', res);
                //100 lines of code
            } catch (error) {
                console.log('rejected: ', error);
            }
        }

        // pizzaPromise
        //     .then((res) => {
        //         console.log('resolved: ', res);
        //         //100 lines of code
        //         //anything else
        //     })
        //     .catch(err => {
        //         console.log('rejected: ', err);
        //         //handle the error gracefully
        //     })
        // console.log('after promise');

        callPizzaPromise();
        console.log('after callpromise');
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
        console.log('count1: ', count);
        setCount((prevCount) => {
            console.log('count2: ', prevCount);
            return prevCount + 1;

        });
    }

    console.log('rendering...');
    return (
        <div>
            <h1>Welcome to promise demo</h1>
            <button onClick={() => handleClick()}>Count</button>
            <p>{count}</p>
            <br />
            <ProductList />
        </div>
    )
}

const isDoughAvailable = false;

const pizzaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isDoughAvailable) {
            resolve(`Here's your Pizza! Enjoyyy!`);
        } else {
            reject('Sorry for keeping you waiting, we dont have dough');
        }
    }, 5000)
})