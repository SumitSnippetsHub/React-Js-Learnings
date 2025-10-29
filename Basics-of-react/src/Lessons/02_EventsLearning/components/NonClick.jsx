function doSomething() {
    console.log("you hover me");
};

export default function NonClick() {
    return (
        <div>
            <p>Non Click Event</p>
            <button onMouseOver={doSomething}>Hover Me !</button>
        </div>
    );
}; 