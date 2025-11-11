import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div style={{ width: 180, display: "flex", justifyContent: "space-between" }}>
            <Link to="/allenHome">Allen</Link>
            <Link to="/allen11">Allen11</Link>
            <Link to="/allen12">Allen12</Link>
        </div>
    )
}