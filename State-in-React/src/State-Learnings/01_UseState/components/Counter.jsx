import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    function Incount() {
        setCount(count + 1);
    };
    return (
        <div>
            <h2>UseState Logic</h2>
            <p>Count = {count}</p>
            <button onClick={Incount}>Increase Count</button>
        </div>
    );
};