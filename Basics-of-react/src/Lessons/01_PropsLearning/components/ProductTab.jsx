import Product from "./product";

function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "5px",
    }

    return (
        <div style={styles}>
            <Product title="Logitec MX Master" idx={0} />
            <Product title="Apple Pencil (2nd gen)" idx={1} />
            <Product title="Zebronics Zeb-transformers" idx={2} />
            <Product title="Petronics Toad 23" idx={3} />
        </div>
    );
};

export default ProductTab;