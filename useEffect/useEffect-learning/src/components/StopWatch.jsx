import { useEffect, useState } from "react"


export default function StopWatch() {

    const [autoCount, setAutoCount] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(function () {
        if (!running) return;

        console.log("run");
        let intervalId = setInterval(() => {
            // console.log("count changing")
            setAutoCount(curVal => curVal + 1); //this is current value here autocount is current value
            // setAutoCount(autoCount + 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [running])

    return (
        <div style={{width:200,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h3>Count {autoCount}</h3>
            <div style={{width:150,display:"flex",justifyContent:"space-evenly"}}>
                <button onClick={() => setRunning(true)} style={{ paddingLeft: 10, paddingRight: 10, cursor: "pointer" }}>Start</button>
                <button onClick={() => setRunning(false)} style={{paddingLeft: 10, paddingRight: 10, cursor: "pointer" }}>Stop</button>
            </div>
        </div>
    )
}