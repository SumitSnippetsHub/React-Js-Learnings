import { useState } from "react";

let btnStyles = {
    color: "red",
};

export default function LikeBtn() {

    const [isLike, setIsLike] = useState(false);

    function toggleLike() {
        setIsLike(!isLike); //which is currently false and changed to true
    };

    return (
        <div>
            <h3>Like Button Activity</h3>
            <button onClick={toggleLike}>{isLike ?
                (<i style={btnStyles} className="fa-solid fa-heart"></i>
                ) : (
                    <i className="redbtn fa-regular fa-heart"></i>
                )}</button>
        </div>

    );
}