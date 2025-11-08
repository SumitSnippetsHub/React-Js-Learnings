import { useEffect, useState } from "react"


export default function AutoCount() {
    const [autoCount, setAutoCount] = useState(0);

    useEffect(function () {
        setInterval(() => {
            // console.log("count changing")
            // setAutoCount(curVal => curVal + 1); //this is current value here autocount is current value
            // setAutoCount(autoCount + 1);
        }, 1000);
    }, [])

    return (
        <div>
            <h3>Count {autoCount}</h3>
            {/* <button style={{ paddingLeft: 10, paddingRight: 10, cursor: "pointer" }}>Start</button> */}
        </div>
    )
}