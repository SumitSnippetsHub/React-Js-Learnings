function doSomething () {
    console.log("you clicked me");
};

export default function ClickEvents (){
    return (
        <div>
            <p>Click Event</p>
            <button onClick={doSomething}>click me !</button>
        </div>
    );
}; 