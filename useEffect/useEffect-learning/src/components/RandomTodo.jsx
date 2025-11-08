import { useEffect, useState } from "react"

export default function RandomTodo() {
    const [currTab, setCurrTab] = useState(1);
    const [tabData, setTabData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        setLoading(true);
        // console.log("current tab is", currTab);
        fetch('https://jsonplaceholder.typicode.com/todos/' + currTab)
            .then(async res => {
                const json = await res.json();
                setTabData(json);
                setLoading(false);
            });
    }, [currTab]);


    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: 300, margin: "auto" }}>
                <button onClick={function () {
                    setCurrTab(1)
                }} style={{ color: currTab == 1 ? "red" : "black" }}>#Todo 1</button>
                <button onClick={function () {
                    setCurrTab(2)
                }} style={{ color: currTab == 2 ? "red" : "black" }}>#Todo 2</button>
                <button onClick={function () {
                    setCurrTab(3)
                }} style={{ color: currTab == 3 ? "red" : "black" }}>#Todo 3</button>
                <button onClick={function () {
                    setCurrTab(4)
                }} style={{ color: currTab == 4 ? "red" : "black" }}>#Todo 4</button>
            </div>

            <p style={{ textAlign: "center" }}>{loading ? "Loading...." : tabData.title}</p>
        </>
    )
}