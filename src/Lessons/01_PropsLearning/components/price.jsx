export default function Price({ oldPrice, newPrice }) {
    let styles = {
        backgroundColor: "#e0c367",
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
        height: "40px",
        textAlign: "center",
        marginTop: "2rem"
    }

    let oldStyles = {
        textDecoration: "line-through",
    }
    return (
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp; &nbsp;
            <span>{newPrice}</span>
        </div>
    )
};