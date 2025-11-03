
const style = {
    width: 250,
    backgroundColor: "aliceblue",
    borderRadius: 15,
    color: "black",
    border: "solid",
    borderColor: "white",
    borderWidth: "1",
    padding: 20,
    marginBottom: 10
}
export default function PostComponent({ name, followerCount, image, time, description }) {
    return (
        <div style={style}>
            <div style={{ display: "flex" }}>
                <img style={{ height: 30, width: 30, borderRadius: 20 }} src={image} alt="" />

                <div style={{ fontSize: 12, marginLeft: 8 }}>
                    <b>
                        {name}
                    </b>
                    <div>{followerCount} followers</div>
                    <div>{time}</div>
                </div>
            </div>
            <div style={{fontSize:12,textIndent:0,padding:0,margin:0}}>
                {description}
            </div>
        </div>

    )
};