import Price from "./price";
import './product.css';


export default function Product({ title,idx}) {
    let oldPrices = ["12,999","11,900","15,333","599"];
    let newPrices = ["8,999","10,999","12,333","399"];
    let description = ["8,000 DPI","inituitive surface","designed for ipad pro","wireless"];
    return (
        <div className="product">
            <h3>{title}</h3>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );

};