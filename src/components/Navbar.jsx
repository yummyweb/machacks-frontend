import { Text } from "@geist-ui/core"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <Link style={{ color: "black", textDecoration: "none" }} to="/" className="nav-logo">
                <Text h3>Hot Cocoa ☕️</Text>
            </Link>
            <div className="nav-right">
                <Link style={{ textDecoration: "none", color: "black" }} to="/projections" className="nav-link">Projections</Link>
                <Link style={{ textDecoration: "none", color: "black" }} to="/team" className="nav-link">Team</Link>
            </div>
        </div>
    )
}

export default Navbar