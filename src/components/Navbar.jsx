import { Text } from "@geist-ui/core"

const Navbar = () => {
    return (
        <div className="navbar">
            <Text h3 className="nav-logo">Awesome AI</Text>
            <div className="nav-right">
                <Text p className="nav-link">Projections</Text>
                <Text p className="nav-link">Team</Text>
            </div>
        </div>
    )
}

export default Navbar