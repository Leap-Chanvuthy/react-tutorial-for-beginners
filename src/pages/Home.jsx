import { useState } from "react";

const Home = () => {
    const [count , setCount] = useState(0);
    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    console.log(count);

    return (
        <div>
            <h4>{count}</h4>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    )
}

export default Home ;