import { Button, Text } from "@geist-ui/core"
import Navbar from "../components/Navbar"

const Landing = () => {
    return (
        <>
            <Navbar />
            <div style={{ marginTop: 100, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Text h1 style={{ fontSize: 60 }}>Generate better insights <span class="sketch-highlight">with AI</span></Text>
                <Button width="30%">Upload data</Button>
            </div>
        </>
    )
}

export default Landing